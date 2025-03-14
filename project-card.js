class projectCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const style = document.createElement('style');
        style.textContent = `
            .project-card {
                display: block;
                max-width: 300px;
                padding: 1rem;
                background: var(--card-bg, #FFF);
                color: var(--card-text, #36454F);
                border-radius: 10px;
                border: 3px solid #36454F;
                text-align: center;
            }

            img {
                max-width: 50%;
                border-radius: 10px;
            }

            h2 {
                font-size: 1.5rem;
            }

            p {
                font-size: 1rem;
            }

            a {
                display: inline-block;
                padding: 0.5rem 0;
            }
        `;
        
        const title =  this.getAttribute('title') || 'Project Title';
        const imageURL = this.getAttribute('image') || 'placeholder.jpg';
        const altText = this.getAttribute('alt') || 'Project Image';
        const description = this.getAttribute('description') || 'Description here';
        const link = this.getAttribute('link') || '#';

        this.innerHTML = `
            <div class="project-card">
                <h2>${title}</h2>
                <img src="${imageURL}" alt="${altText}">
                <p>${description}</p>
                <a href = "${link}">Project Link</a>
            </div>
        `;

        this.appendChild(style);

        this.querySelector('.project-card').addEventListener('click', () => this.doSomething());
    }

    doSomething() {
        const event = new CustomEvent('projectCardClick', {
            bubbles: true,
        });
        this.dispatchEvent(event);
    }
}

customElements.define('project-card', projectCard);
