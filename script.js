<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <link rel="stylesheet" href="style.css">
    <title>Princess Portfolio</title>
</head>
<body>
    <nav>
        <div class="nav-container">
            <div class="logo" data-aos="zoom-in" data-aos-duration="1500">Princess <span>Joy</span></div>
            <div class="links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </div>
            <i class="fa-solid fa-bars hamburg" onclick="hamburg()"></i>
        </div>
    </nav>
    
    <section id="home">
        <div class="main-container">
            <div class="image" data-aos="zoom-out" data-aos-duration="3000">
                <img src="main.png" alt="Profile Image">
            </div>
            <div class="content">
                <h1 data-aos="fade-left" data-aos-duration="1500">Hey I'm <span>Princess</span></h1>
                <div class="typewriter" data-aos="fade-right" data-aos-duration="1500">
                    <span class="typewriter-text"></span><span class="cursor">|</span>
                </div>
                <p>A skilled professional specializing in fraud prevention, data management, and customer operations.</p>
                <div class="social-links">
                    <a href="https://www.facebook.com/cessespinosamatias/"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://www.linkedin.com/in/princessmatias/"><i class="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    </section>
    
    <section id="about"> <h2>About Me</h2> <p>Detail about experience and expertise.</p> </section>
    <section id="skills"> <h2>Skills</h2> <p>List of key skills.</p> </section>
    <section id="services"> <h2>Services</h2> <p>What I offer.</p> </section>
    <section id="contact"> <h2>Contact</h2> <p>Email and form.</p> </section>
    
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
        AOS.init();
        
        function hamburg(){
            const navbar = document.querySelector(".dropdown");
            navbar.style.transform = "translateY(0px)";
        }
        
        function cancel(){
            const navbar = document.querySelector(".dropdown");
            navbar.style.transform = "translateY(-500px)";
        }
        
        // Typewriter Effect
        const texts = [
            "Uber Direct Merchant Specialist",
            "COE Specialist I - US & Canada Outreach Innovation",
            "Transaction & Identity Fraud Analyst",
            "Flagship Support Associate"
        ];
        
        let speed = 100;
        const textElements = document.querySelector(".typewriter-text");
        let textIndex = 0;
        let charcterIndex = 0;
        
        function typeWriter(){
            if (charcterIndex < texts[textIndex].length){
                textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
                charcterIndex++;
                setTimeout(typeWriter, speed);
            }
            else{
                setTimeout(eraseText, 1000);
            }
        }
        
        function eraseText(){
            if(textElements.innerHTML.length > 0){
                textElements.innerHTML = textElements.innerHTML.slice(0,-1);
                setTimeout(eraseText, 50);
            }
            else{
                textIndex = (textIndex + 1) % texts.length;
                charcterIndex = 0;
                setTimeout(typeWriter, 500);
            }
        }
        
        document.addEventListener("DOMContentLoaded", () => {
            setTimeout(typeWriter, 1000);
        });
    </script>
</body>
</html>

