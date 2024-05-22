// ==================== TESTIMONIALS ===================
const testimonials = [
    {
        name: 'Sayan Das',
        role: 'Customer',
        avatar: './assets/user1.png',
        content: 'Whiskd n Bakd has been a game-changer for me. The cakes are delicious, the customization options are fantastic, and the service is top-notch.',
    },
    {
        name: 'Emma Johnson',
        role: 'Customer',
        avatar: './assets/user2.png',
        content: 'Whiskd n Bakd has truly transformed my party planning. The beautiful and tasty cakes, along with their exceptional service, have made every event special. Highly recommend!',
    },
    {
        name: 'Michael Brown',
        role: 'Customer',
        avatar: './assets/user3.png',
        content: 'Whiskd n Bakd provides an outstanding service for cake lovers. The attention to detail in their creations and the ease of customization make it a go-to for any occasion.',
    },
    {
        name: 'Sophia Lee',
        role: 'Customer',
        avatar: './assets/user4.png',
        content: 'I am incredibly grateful for Whiskd n Bakd. The cakes are always fresh, delicious, and beautifully designed. They have exceeded my expectations every single time.',
    },
    {
        name: 'David Miller',
        role: 'Customer',
        avatar: './assets/user5.png',
        content: 'Whiskd n Bakd has revolutionized my celebration experiences. The exquisite flavors, stunning designs, and outstanding service have made every event memorable. Simply the best!',
    }
];

// Function to generate HTML for each testimonial
function generateTestimonialHTML(testimonial) {
    return `
        <article class="testimonial swiper-slide">
            <div class="testimonial-person">
                <div class="avatar">
                    <img src="${testimonial.avatar}" alt="${testimonial.name}" loading="lazy">
                </div>
                <div class="testimonial-info">
                    <h5>${testimonial.name}</h5>
                    <small>${testimonial.role}</small>
                </div>
            </div>
            <div class="testimonial-body">
                <p>${testimonial.content}</p>
            </div>
        </article>
    `;
}

// Function to dynamically generate testimonial HTML and append to container
function displayTestimonials() {
    const container = document.querySelector('.swiper-wrapper');
    testimonials.forEach(testimonial => {
        const testimonialHTML = generateTestimonialHTML(testimonial);
        container.innerHTML += testimonialHTML;
    });
}

displayTestimonials();
