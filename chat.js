<script>
async function sendMessage() {
  const message = document.getElementById("userInput").value;
  const res = await fetch("/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });
  const data = await res.json();
  document.getElementById("response").innerText = data.reply;
}
</script>
