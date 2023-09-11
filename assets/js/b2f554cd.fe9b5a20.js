"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2023/08/26/roadmap","metadata":{"permalink":"/blog/2023/08/26/roadmap","source":"@site/blog/2023-08-26-roadmap.md","title":"Initial Project Roadmap","description":"The motivation to establish Scaling Lightning has stemmed from the recognition that the testing of lightning networks poses considerable challenges, necessitating substantial development efforts. Various teams have found themselves devising their own individualised testing frameworks. Our aspiration is that the Scaling Lightning will become the standard choice for technical teams. This would liberate their resources, enabling them to concentrate on the core issue at hand rather than ever expanding efforts on constructing the testing infrastructure requisite for validating their solutions.","date":"2023-08-26T00:00:00.000Z","formattedDate":"August 26, 2023","tags":[{"label":"roadmap","permalink":"/blog/tags/roadmap"}],"readingTime":2.385,"hasTruncateMarker":true,"authors":[{"name":"Max Edwards","title":"Core Maintainer","url":"https://github.com/maxwedwards","imageURL":"https://avatars.githubusercontent.com/u/1204616","key":"max"}],"frontMatter":{"title":"Initial Project Roadmap","authors":["max"],"tags":["roadmap"],"draft":false},"nextItem":{"title":"Scaling Lightning runs in the cloud","permalink":"/blog/2023/08/09/running-in-the-cloud"}},"content":"The motivation to establish Scaling Lightning has stemmed from the recognition that the testing of lightning networks poses considerable challenges, necessitating substantial development efforts. Various teams have found themselves devising their own individualised testing frameworks. Our aspiration is that the Scaling Lightning will become the standard choice for technical teams. This would liberate their resources, enabling them to concentrate on the core issue at hand rather than ever expanding efforts on constructing the testing infrastructure requisite for validating their solutions.\\n\\n\x3c!--truncate--\x3e\\n\\n## Phase 0 - Initial Development\\n\\n### Aims\\n\\nCreate the technical base from which expected future use cases can built upon\\nWork\\n\\n- Add CLN, LND, LDK and Eclair Node Types\\n- Build out minimum viable API across all four implementations\\n- Ensure functionality works in cloud environment as well as locally\\n\\n## Phase 1 - Application Testing\\n\\n### Use Cases\\n\\nLocal Development environment for any lightning application\\nCI/CD Testing environment for any lightning application\\n\\n### Work\\n\\n- Write libraries in Go, Rust, Python, JVM, JavaScript, etc.\\n- Define and implement a data structure for defining desired network state (channels, peers, invoices)\\n- Tool to achieve desired initial state\\n- Enable direct GRPC / API access to nodes\\n- Documentation\\n\\n### Target Adopters\\nAny node management tool, wallet, exchange, custodian, LSP\\nFor example LN Capital to replace Torq\u2019s in-house test and dev environment\\n\\n## Phase 2 - Lightning implementation testing\\n\\n### Use Cases\\nTesting new lightning implementation releases and cross implementation compatibility with simulated network activity\\n\\n### Work\\n\\n- Tool to simulate network activity using personas (busy exchange, pleb, routing node)\\n- Ability to aggregate stats or logs to compare test runs\\n- Documentation\\n\\n### Target Adopters\\n\\nBlockstream with Core Lightning\\nLightning Labs with LND\\nSpiral with LDK\\nACINQ with Eclair\\n\\n## Phase 3 - Alpha feature testing & research\\n\\n### Use Cases\\nAlpha / Beta testing of specific features on lightning implementations\\n\\n### Work\\n\\n- Tool to simulate user defined network activity\\n- Allow components of the network to be swapped out for the new component under test\\n\\n### Example Target Adopters\\n\\nExamples of efforts being tested at present that we would have liked to have been in a position to help support test:\\n\\nChannel Jamming - Carla Kirk-Cohen\\nPickhardt Payments - Rene Pickhardt\\nBolt 12 Prisms - farscapian\\n\\n### Risks\\n\\nWithout knowing what future concepts and experiments the community will want to test on the lightning network we wouldn\u2019t know how much effort (if any) would be required to re-configure scaling lightning to support that use case.\\n\\n## Phase 4 - Signets\\n\\n### Use Cases\\n\\nProvide communities the ability to easily spin up and maintain public Signet networks for learning and experimentation\\nWork\\nPublicly accessible API to interact with the signet such as to request a node opens a channel with you or sends you certain traffic\\nDocumentation\\n\\n### Target Adopters\\n\\nPlebnet, Zebedee, ScalingLightningNet?"},{"id":"/2023/08/09/running-in-the-cloud","metadata":{"permalink":"/blog/2023/08/09/running-in-the-cloud","source":"@site/blog/2023-08-09-running-in-the-cloud.md","title":"Scaling Lightning runs in the cloud","description":"A video demo of the project running on a cloud environment controlled via local cli.","date":"2023-08-09T00:00:00.000Z","formattedDate":"August 9, 2023","tags":[{"label":"video","permalink":"/blog/tags/video"}],"readingTime":0.155,"hasTruncateMarker":false,"authors":[{"name":"Max Edwards","title":"Core Maintainer","url":"https://github.com/maxwedwards","imageURL":"https://avatars.githubusercontent.com/u/1204616","key":"max"}],"frontMatter":{"title":"Scaling Lightning runs in the cloud","authors":["max"],"tags":["video"],"draft":false},"prevItem":{"title":"Initial Project Roadmap","permalink":"/blog/2023/08/26/roadmap"},"nextItem":{"title":"Project Demo","permalink":"/blog/2023/07/19/project-demo"}},"content":"A video demo of the project running on a cloud environment controlled via local cli.\\n\\n<iframe width=\\"560\\" height=\\"315\\" src=\\"https://www.youtube-nocookie.com/embed/4Nk1BUZJLcg?si=NTXG2ChC3UE3kF_O\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>"},{"id":"/2023/07/19/project-demo","metadata":{"permalink":"/blog/2023/07/19/project-demo","source":"@site/blog/2023-07-19-project-demo.md","title":"Project Demo","description":"A video demo of the project. We cover progress made so far and some architectural choices.","date":"2023-07-19T00:00:00.000Z","formattedDate":"July 19, 2023","tags":[{"label":"video","permalink":"/blog/tags/video"}],"readingTime":0.16,"hasTruncateMarker":false,"authors":[{"name":"Max Edwards","title":"Core Maintainer","url":"https://github.com/maxwedwards","imageURL":"https://avatars.githubusercontent.com/u/1204616","key":"max"}],"frontMatter":{"title":"Project Demo","authors":["max"],"tags":["video"],"draft":false},"prevItem":{"title":"Scaling Lightning runs in the cloud","permalink":"/blog/2023/08/09/running-in-the-cloud"}},"content":"A video demo of the project. We cover progress made so far and some architectural choices.\\n\\n<iframe width=\\"560\\" height=\\"315\\" src=\\"https://www.youtube-nocookie.com/embed/bx43_f49QZg?si=0ET1OWofVOsze6QB\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>"}]}')}}]);