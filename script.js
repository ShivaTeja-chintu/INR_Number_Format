function formatAmount() {
    const amount = document.getElementById("amount").value;

    if (!amount) {
        return;
    }

    const formatted = Number(amount).toLocaleString("en-IN") + "₹";

    document.getElementById("result").innerText = formatted
}