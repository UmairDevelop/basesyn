<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Only allow POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method Not Allowed"]);
    exit;
}

// Get JSON input
$data = json_decode(file_get_contents("php://input"), true);

// Validate input
$name = filter_var($data['name'] ?? '', FILTER_SANITIZE_STRING);
$email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$message = filter_var($data['message'] ?? '', FILTER_SANITIZE_STRING);

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Please fill in all fields."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid email format."]);
    exit;
}

// Email configuration
$to = "umair@basesyn.com";
$subject = "New Contact Form Submission from $name";
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$email_content = "Name: $name\n";
$email_content .= "Email: $email\n\n";
$email_content .= "Message:\n$message\n";

// Send email
if (mail($to, $subject, $email_content, $headers)) {
    echo json_encode(["status" => "success", "message" => "Message sent successfully!"]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Failed to send message. Please try again later."]);
}
?>
