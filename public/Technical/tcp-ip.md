## TCP/IP

Transmission of data from one device to another  over a network involve several layers, including the Internet Protocol (IP) layer, Transmission Control Protocol (TCP) layer, and application protocol layer.

The IP layer contains data as discrete units of bytes called packets. The two primary focuses of this layer are fragmenting the data and directing them to their destination.

The TCP layer establishes the source and destination of the messages (network address, device address, and port number). This layer has another possible protocol called the User Datagram Protocol (UDP). Compared to UDP, TCP has higher functionality, ensuring retransmission and reordering of data as necessary. UDP is useful when speed is prioritized over reliability, and can tolerate some data loss (ie. real-time applications involving streaming video/audio, or online multiplayer games). TCP is useful for sending all data in an ordered and reliable manner (ie. downloading a program).