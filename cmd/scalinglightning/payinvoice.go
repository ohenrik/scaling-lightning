package scalinglightning

import (
	"fmt"
	"log"

	sl "github.com/scaling-lightning/scaling-lightning/pkg/network"
	"github.com/spf13/cobra"
)

func init() {

	var payInvoiceCmd = &cobra.Command{
		Use:   "payinvoice",
		Short: "pay lightning invoice",
		Long:  ``,
		Run: func(cmd *cobra.Command, args []string) {
			processDebugFlag(cmd)
			nodeName := cmd.Flag("node").Value.String()
			invoice := cmd.Flag("invoice").Value.String()
			slnetwork, err := sl.DiscoverStartedNetwork(kubeConfigPath, apiHost, apiPort)
			if err != nil {
				fmt.Printf(
					"Problem with network discovery, is there a network running? Error: %v\n",
					err.Error(),
				)
				return
			}
			allNodes := slnetwork.LightningNodes
			for _, node := range allNodes {
				if node.GetName() == nodeName {
					paymentPreimage, err := node.PayInvoice(invoice)
					if err != nil {
						fmt.Printf("Problem paying the invoice: %v\n", err.Error())
						return
					}
					fmt.Printf("preimage: %v\n", paymentPreimage)
					return
				}
			}
			allNames := []string{}
			for _, node := range allNodes {
				allNames = append(allNames, node.GetName())
			}
			fmt.Printf(
				"Can't find node with name %v, here are the nodes that are running: %v\n",
				nodeName,
				allNames,
			)
		},
	}

	rootCmd.AddCommand(payInvoiceCmd)

	payInvoiceCmd.Flags().
		StringP("node", "n", "", "The name of the node that will pay the invoice")
	err := payInvoiceCmd.MarkFlagRequired("node")
	if err != nil {
		log.Fatalf("Problem marking node flag as required: %v", err.Error())
	}

	payInvoiceCmd.Flags().StringP("invoice", "i", "", "The invoice to pay")
	err = payInvoiceCmd.MarkFlagRequired("invoice")
	if err != nil {
		log.Fatalf("Problem marking invoice flag as required: %v", err.Error())
	}
}