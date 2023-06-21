package main

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/lightningnetwork/lnd/lnrpc"
	"github.com/rs/zerolog/log"
	"github.com/scaling-lightning/scaling-lightning/pkg/standardclient/apierrors"
	"github.com/scaling-lightning/scaling-lightning/pkg/standardclient/lightning"
)

// Probably better mock against our own interface
//go:generate mockery --srcpkg=github.com/lightningnetwork/lnd/lnrpc --name=LightningClient

func registerHandlers(standardclient lightning.StandardClient, lndClient lnrpc.LightningClient) {
	standardclient.RegisterWalletBalanceHandler(func(w http.ResponseWriter, r *http.Request) {
		handleWalletBalance(w, r, lndClient)
	})
	standardclient.RegisterGetNewAddressHandler(func(w http.ResponseWriter, r *http.Request) {
		handleGetNewAddress(w, r, lndClient)
	})
}

func handleWalletBalance(w http.ResponseWriter, r *http.Request, lndClient lnrpc.LightningClient) {
	response, err := lndClient.WalletBalance(context.Background(), &lnrpc.WalletBalanceRequest{})
	if err != nil {
		log.Error().Err(err).Msg("Problem getting wallet balance")
		return
	}
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(fmt.Sprintf("Wallet balance is: %v", response.TotalBalance)))
}

type newAddressResponse struct {
	Address string `json:"address"`
}

func handleGetNewAddress(w http.ResponseWriter, r *http.Request, lndClient lnrpc.LightningClient) {
	newAddress, err := lndClient.NewAddress(context.Background(), &lnrpc.NewAddressRequest{})
	if err != nil {
		log.Error().Err(err).Msg("Problem getting wallet balance")
		return
	}
	response := newAddressResponse{Address: newAddress.Address}
	responseJson, err := json.Marshal(response)
	if err != nil {
		apierrors.SendServerErrorFromErr(w, err, "Problem marshalling new address json")
	}

	w.WriteHeader(http.StatusOK)
	w.Write(responseJson)
}
