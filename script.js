// Fade-in sections
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold:0.3 };
const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Counters
const counters = document.querySelectorAll(".count");
counters.forEach(counter=>{
  counter.innerText='0';
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText.replace(/,/g,'');
    const increment = target/200;
    if(current<target){ counter.innerText=Math.ceil(current+increment); setTimeout(updateCount,15); }
    else counter.innerText=target.toLocaleString();
  };
  updateCount();
});

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
navToggle.addEventListener('click',()=>{ navMenu.classList.toggle('open'); });
