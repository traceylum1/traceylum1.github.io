## CAP Theorem

The CAP theorem is a fundamental topic in distributed systems, particularly when it comes to data storage and retrieval. CAP stands for Consistency, Availability, and Partition tolerance. Consistency means that a node will either return the most up-to-date value or an error, availability means that a healthy node will always return a value even if it may be stale, and partition tolerance is the system's ability to continue its regular functionality despite potential network or node failures.

The theorem states that any distributed store can achieve both consistency and availability in healthy network conditions, but can only guarantee one of the two in the case of a network partition, and all distributed systems must account for network partitions.

Using a multi-node distributed cache as an example, we can look at how each attribute can be achieved in a real system.

For a distributed cache cluster to be consistent, a node that stores a particular piece of data must have the most recent value. If the cluster implements replication, every replica node must also have the most recent value. There are a number of methods to ensure consistency. A cache write-through policy is considered highly consistent because every write request is completed by both the cache and primary database simultaneously. An absolute time-to-live timestamp can be attached to each value at write time so that the chance of any node having stale data is less likely. Alternatively, if there is a cluster coordinator, it can broadcast invalidations to all nodes that store a particular key. Quorum consistency requires a minimum number of nodes to agree on a read or write operation for it to be completed, ensuring data integrity.

