## TCP/IP

Transmission of data from one device to another over a network is handled by the Internet Protocol Suite, which includes the link layer, Internet Protocol (IP) layer, Transmission Control Protocol (TCP) layer, and application layer.

The link layer handles transmitting data within a local network, ie. from a laptop to a home router via ethernet or Wi-Fi or vice-versa. Data in this layer is wrapped up in ethernet or Wi-Fi frames, and contains the source and destination MAC addresses to hop between network devices.

The IP layer wraps data in the form of packets. The two primary focuses of this layer are fragmenting the data into manageable chunks and routing each packet to their correct destination. The routing is handled by attaching a logical address of the destination device (IP address) to each packet, which routers will use to decide how the data will traverse across multiple networks.

The TCP layer establishes the source and destination of the messages (network address, device address, and port number). This layer has another possible protocol called the User Datagram Protocol (UDP). Compared to UDP, TCP has higher functionality, ensuring retransmission and reordering of data as necessary. UDP is useful when speed is prioritized over reliability and can tolerate some data loss (ie. real-time applications involving streaming video/audio, or online multiplayer games). TCP is useful for sending all data in an ordered and reliable manner (ie. downloading a program).