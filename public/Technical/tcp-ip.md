## TCP/IP

The layers involved in transmission of data include (from low level to higher) the IP layer, TCP/UDP layer, and application protocol layer.

The IP layer contains data as discrete units of bytes called IP packets. The TCP/UDP layer establishes the source and destination of the messages. UDP only establishes the IP and port, while TCP has higher functionality, ensuring retransmission and reordering of data as necessary. UDP is useful for when the timing of the data sent is important and can tolerate some loss (ie. streaming video/audio or online multiplayer games), whereas TCP is useful for sending all data in an ordered and reliable manner (ie. downloading a program).