const StatusCode = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504
};


module.exports = { StatusCode }

/* 

// EN-US

HTTP - Hyper text Transfer Protocol
Function: Exchange messages between computers
Message: The message is broken into several chunks
URL: Uniform Resource Locator
    - Locator and identifier of a resource, which in this case is the Site

// OK
OK is a successful answer. And used when the request was successful.
The meaning of a success varies depending on the HTTP method:
- GET: The resource was fetched and transmitted in the message body.
- HEAD: The entity headers are in the message body.
- PUT or POST: The resource that describes the result of the action is transmitted in the body of the message.
- TRACE: The message body contains the request message received by the server

// CREATE
Create is a successful response. It is used when a new resource has been created.
The newly created resource can be referenced by the URI(s) returned in the response entity,
with the most specific URI for the resource provided by a location header.
The response MUST include an entity containing a list of resource characteristics and location(s)
from where the user or user agent can choose the most appropriate one. The entity format is specified
by the media type given in the Content-Type header. The source server MUST create the resource
before returning status code 201. If the action cannot be performed immediately,
the server MUST respond with a 202 (Accepted) response instead.

// ACCEPTED
Accepted is a successful answer. It is used when the request has been accepted for processing,
but processing is not yet complete. The request may or may not eventually be executed,
as it can be negated when processing is performed. There is no way to resend a status code
of an asynchronous operation like this.

// NO_CONTENT
No content is a successful response. It is used when the request was successful,
but there is no new information to send back in the payload response body.
Metadata in response header fields refers to the target resource and its representation
selected after applying the requested action.

// BAD_REQUEST
Bad Request is an error response from the client. Used when the request cannot be understood by the server
due to malformed syntax. The client MUST NOT repeat the request without modification.

// UNAUTHORIZED
Unauthorized is an error response from the client. It is used when the request has not been applied
because it does not have valid authentication credentials for the target resource.

// FORBIDDEN
Forbidden is an error response from the client. It is used when the request has not been applied
because it does not have valid authentication credentials for the target resource.

// NOT_FOUND
Not found is an error response from the client. Used when the origin server could not find a current representation
to the target resource or is unwilling to reveal that one exists.

// INTERNAL_SERVER_ERROR
Internal Server Error is a server error response. Used when the server encountered an unexpected condition
that prevented him from fulfilling the request.

// BAD_GATEWAY
Bad Gateway is a server error response. It is used when the server, while acting as a gateway or proxy,
received an invalid response from the upstream server it accessed while trying to fulfill the request.

// SERVICE_UNAVAILABLE
Service unavailable is a server error response. It is used when the server cannot currently handle the request
due to a temporary overload or scheduled maintenance, which will likely be relieved after some delay.
The server MUST send a Retry-After field to suggest an appropriate amount of time to the client
to retry the request.

// GATEWAY_TIMEOUT
Gateway Timeout is a server error response. It is used when the server, while acting as a gateway or proxy,
did not receive a timely response from the upstream server it needed to access to complete the request.

---------------------------------------------------------------------------------------------------------------------------------------------

// PT-BR

HTTP - Hyper text Transfer Protocol
Fun????o: Trocar mensagens entre computadores
Mensagem: A mensagem ?? quebrada em diversos pacotes(chunks)
URL: Uniform Resource Locator
    - Localizador e identificador de um recurso, que nesse caso ?? o Site

// OK
OK ?? uma resposta bem sucedida. E usada quando a solicita????o foi bem sucedida.
O significado de um sucesso varia dependendo do m??todo HTTP:
- GET: O recurso foi buscado e transmitido no corpo da mensagem.
- HEAD: Os cabe??alhos da entidade est??o no corpo da mensagem.
- PUT ou POST: O recurso que descreve o resultado da a????o ?? transmitido no corpo da mensagem.
- TRACE: O corpo da mensagem cont??m a mensagem de solicita????o recebida pelo servidor

// CREATE
Create ?? uma resposta bem sucedida. ?? usada quando um novo recurso foi criado.
O novo recurso criado pode ser referenciado pelo URI(s) retornado na entidade da resposta,
com o URI mais espec??fico para o recurso fornecido por um cabe??alho de localiza????o.
A resposta DEVE incluir uma entidade contendo uma lista de caracter??sticas do recurso e localiza????o(s)
de onde o usu??rio ou agente do usu??rio pode escolher o mais apropriado. O formato da entidade ?? especificado
pelo tipo de m??dia fornecido no cabe??alho Content-Type. O servidor de origem DEVE criar o recurso
antes de retornar o c??digo de status 201. Se a a????o n??o puder ser executada imediatamente,
o servidor DEVE responder com a resposta 202 (Aceito) em vez disso.

// ACCEPTED
Aceito ?? uma resposta bem sucedida. ?? usada quando a solicita????o foi aceita para processamento,
mas o processamento ainda n??o foi conclu??do. A solicita????o pode ou n??o ser eventualmente executada,
pois pode ser negada quando o processamento ?? realizado. N??o h?? meios para reenviar um c??digo de status
de uma opera????o ass??ncrona como esta.

// NO_CONTENT
Sem conte??do ?? uma resposta bem sucedida. ?? usada quando a solicita????o foi bem sucedida,
mas n??o h?? novas informa????es para enviar de volta no corpo da resposta de carga ??til.
Os metadados nos campos de cabe??alho da resposta se referem ao recurso de destino e sua representa????o
selecionada ap??s a aplica????o da a????o solicitada.

// BAD_REQUEST
Bad Request ?? uma resposta de erro do cliente. ?? usada quando a solicita????o n??o pode ser entendida pelo servidor
devido a sintaxe mal formada. O cliente N??O DEVE repetir a solicita????o sem modifica????es.

// UNAUTHORIZED
N??o autorizado ?? uma resposta de erro do cliente. ?? usada quando a solicita????o n??o foi aplicada
porque n??o possui credenciais de autentica????o v??lidas para o recurso de destino.

// FORBIDDEN
Proibido ?? uma resposta de erro do cliente. ?? usada quando a solicita????o n??o foi aplicada
porque n??o possui credenciais de autentica????o v??lidas para o recurso de destino.

// NOT_FOUND
N??o encontrado ?? uma resposta de erro do cliente. ?? usada quando o servidor de origem n??o encontrou uma representa????o atual
para o recurso de destino ou n??o est?? disposto a revelar que um existe.

// INTERNAL_SERVER_ERROR
Erro interno do servidor ?? uma resposta de erro do servidor. ?? usada quando o servidor encontrou uma condi????o inesperada
que o impediu de cumprir a solicita????o.

// BAD_GATEWAY
Bad Gateway ?? uma resposta de erro do servidor. ?? usada quando o servidor, enquanto atua como gateway ou proxy,
recebeu uma resposta inv??lida do servidor upstream que ele acessou ao tentar cumprir a solicita????o.

// SERVICE_UNAVAILABLE
Servi??o indispon??vel ?? uma resposta de erro do servidor. ?? usada quando o servidor n??o pode atualmente lidar com a solicita????o
devido a uma sobrecarga tempor??ria ou manuten????o programada, que provavelmente ser?? aliviada ap??s algum atraso.
O servidor DEVE enviar um campo Retry-After para sugerir uma quantidade apropriada de tempo para o cliente
para tentar novamente a solicita????o.

// GATEWAY_TIMEOUT
Gateway Timeout ?? uma resposta de erro do servidor. ?? usada quando o servidor, enquanto atua como gateway ou proxy,
n??o recebeu uma resposta oportuna do servidor upstream que ele precisava acessar para concluir a solicita????o.

---------------------------------------------------------------------------------------------------------------------------------------------

*/