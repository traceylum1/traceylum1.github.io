## TCP vs IP

The layers involved in transmission of data over a network include (from low level to higher) the IP layer, TCP/UDP layer, and application protocol layer.

The IP layer contains data as discrete units of bytes called IP packets. The TCP/UDP layer establishes the source and destination of the messages (IP and port numbers). Compared to UDP, TCP has higher functionality, ensuring retransmission and reordering of data as necessary. UDP is useful when speed is prioritized over reliability, and can tolerate some data loss (ie. real-time applications involving streaming video/audio, or online multiplayer games). TCP is useful for sending all data in an ordered and reliable manner (ie. downloading a program).