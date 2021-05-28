<?php
header('Content-type: application/json');
$url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
$parameters = [
    'start' => '1',
    'limit' => '20',
    'convert' => 'USD',
];

$headers = [
    'Accepts: application/json',
    'X-CMC_PRO_API_KEY: eadd6a85-8d92-4b85-9eba-f4a18e24aa18',
];
$qs = http_build_query($parameters); // query string encode the parameters
$request = "{$url}?{$qs}"; // create the request URL

$curl = curl_init(); // Get cURL resource
// Set cURL options
curl_setopt_array($curl, array(
    CURLOPT_URL => $request, // set the request URL
    CURLOPT_HTTPHEADER => $headers, // set the headers
    CURLOPT_RETURNTRANSFER => 1, // ask for raw response instead of bool
));

$response = curl_exec($curl); // Send the request, save the response
print_r($response); // print json decoded response

curl_close($curl); // Close request
?>