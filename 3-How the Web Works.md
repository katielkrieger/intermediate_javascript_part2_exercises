Katie Krieger

4/18/17


[How the Web Works Exercises](https://www.rithmschool.com/courses/intermediate-javascript-part-2/how-the-web-works-exercises)
-----


1. `HTTP` stands for Hyper Text Transfer Protocol. It's a client-server protocol, or set of rules and standards, that lets clients get data from (or post data to) a server.
2. `URL` stands for Uniform Resource Locator. It's the domain name (or address) for a website. 
3. `TCP` stands for Transmission Control Protocol. It is a protocol that manages the sending and receiving of data between hosts.
4. `IP` stands for Internet Protocol. It's the protocol that governs how data is sent across a network.
5. `DNS` stands for Domain Name System. DNS servers associate the domain name (URL) with the IP address.
6. Idempotent refers to an operation that can be repeated on a set of data without changing the state of the set of data. `GET` is one example.
7. A query string is the set of key-value pairs provided (optionally) as parameters to a web server in a URL. The keys can be used by the web server to change the HTTP response returned in some way.
8. A `path` or `route` is the path to the resource on the web server. It can relate to a physical file on the server or an abstract resource that the server can dynamically create, read, update or delete.
9. GET (idempotent) - getting data from the server 

	POST (non-idempotent) - creating or modifying data on the server
	
	DELETE (non-idempotent) - deleting data from server
	
	PUT (non-idempotent) - updating existing data on the server

10. A client is a computer making a request to a remote server.
11. A server is a computer that can receive requests from multiple clients and issue responses.
12. An HTTP request is a client request to a server using the HTTP protocol (or set of communications rules and standards). It can use a number of different verbs, along with headers.
13. An HTTP response is the server response to an HTTP request from a client, using the HTTP protocol. 
14. An HTTP header is additional meta-information about the request. Some examples: Host, Accept, Cookie.
15. REST stands for REpresentational State Transfer. It is an architectural style that provides a framework for creating fast, scalable, and reliable APIs and web services.
16. JSON stands for JavaScript Object Notation. It's a data-interchange format that's easy for humans to read and for machines to parse. It's an easy way to format data to transfer between clients and servers. It allows for straightforward conversion to JavaScript.
17. First, the DNS lookup happens to match https://www.google.com to an IP address, so the browser can connect to the Google server. Then the browser makes an HTTP GET request to the server for the path `/`. The server receives the request and generates the HTML for the page. The HTML is then sent back through an HTTP response. The browser creates the DOM and performs GET requests for any tags that reference other files.
18. When we say that the web is "stateless", this means that HTTP requests are independent (i.e., no knowledge of prior transactions).
19. `curl` is a command line tool that allows us to issue HTTP requests from the terminal. It accepts a number of flags that let us add request headers, pick HTTP verbs, and more.
20. `curl http://omdbapi.com?t=titanic`