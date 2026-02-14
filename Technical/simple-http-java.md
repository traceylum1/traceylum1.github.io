## Simple HTTP Server in Java

A quick summary of how to write up a simple HTTP Server in Java:

1. Make a new instance of a ServerSocket and pass in desired port number.

2. Create a while loop that iterates as long as the server is running.

3. Call the ServerSocket method accept(), which is a blocking method that waits for a client to connect, and then returns a Socket object.

4. Read the HTTP request from the Socket object using InputStreamReader, which converts bytes streams to character streams.

5. Prepare an HTTP response.

6. Send HTTP response to the client by writing to the Socket object's output stream.

7. Close the socket connection.