const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {

    const button = faq.querySelector(".toggle-btn");

    button.addEventListener("click", () => {

        const isOpen = faq.classList.contains("active");

        // Close all FAQs
        faqs.forEach(item => {

            item.classList.remove("active");

            const btn = item.querySelector(".toggle-btn");
            btn.textContent = "+";
            btn.classList.remove("minus");
            btn.classList.add("plus");

        });

        // Open the clicked FAQ if it wasn't already open
        if (!isOpen) {

            faq.classList.add("active");

            button.textContent = "−";
            button.classList.remove("plus");
            button.classList.add("minus");

        }

    });

});