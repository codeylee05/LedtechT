<script>
    document.addEventListener('DOMContentLoaded', function () {
  const planButtons = document.querySelectorAll('[data-bs-toggle="modal"][data-plan]');
    const planInput = document.getElementById('selectedPlanInput');
    const planLabel = document.getElementById('selectedPlanName');

  planButtons.forEach(button => {
        button.addEventListener('click', function () {
            const plan = this.getAttribute('data-plan');
            planInput.value = plan;
            planLabel.textContent = plan;
        });
  });

    // Optional: simple form handler
    document.getElementById('planForm').addEventListener('submit', function (e) {
        e.preventDefault();
    alert('Form submitted for plan: ' + planInput.value);
    // TODO: send the data to your backend here
    this.reset();
    const modal = bootstrap.Modal.getInstance(document.getElementById('planModal'));
    modal.hide();
  });
});
</script>
