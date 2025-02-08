document.addEventListener("DOMContentLoaded", () => {
    const homeIcon = document.querySelector(".sidebar-item:first-child")
    const mainContent = document.querySelector("main")
    const loginForm = document.querySelector("#loginModal form")
    const signupForm = document.querySelector("#signinModal form")
  
    // Function to show signup modal
    function showSignupModal() {
      signinModal.classList.remove("hidden")
      blurLayer.classList.remove("hidden")
    }
  
    // Event listener for clicks on main content
    mainContent.addEventListener("click", (event) => {
      if (!event.target.closest("header") && !event.target.closest(".sidebar-item:first-child")) {
        showSignupModal()
      }
    })
  
    // Prevent modal from showing when clicking on the home icon
    homeIcon.addEventListener("click", (event) => {
      event.stopPropagation()
    })
  
    // Function to handle form submission
    function handleFormSubmit(event, formType) {
      event.preventDefault()
      const nameInput =
        formType === "login" ? document.getElementById("login-name") : document.getElementById("signin-email")
      const name = nameInput.value.split("@")[0] // Extract name from email for signup
      localStorage.setItem("userName", name)
      window.location.href = "Home_AfterSignin.html"
    }
  
    // Event listeners for form submissions
    loginForm.addEventListener("submit", (event) => handleFormSubmit(event, "login"))
    signupForm.addEventListener("submit", (event) => handleFormSubmit(event, "signup"))
  })
  
  // Get elements
  const loginButton = document.getElementById("loginButton")
  const signinButton = document.getElementById("signinButton")
  const loginModal = document.getElementById("loginModal")
  const signinModal = document.getElementById("signinModal")
  const blurLayer = document.getElementById("blurLayer")
  const goToSignIn = document.getElementById("goToSignIn")
  const goToLogin = document.getElementById("goToLogin")
  
  // Show Login modal
  loginButton.addEventListener("click", (event) => {
    event.preventDefault()
    loginModal.classList.remove("hidden")
    blurLayer.classList.remove("hidden")
  })
  
  // Show Sign Up modal
  signinButton.addEventListener("click", (event) => {
    event.preventDefault()
    signinModal.classList.remove("hidden")
    blurLayer.classList.remove("hidden")
  })
  
  // Close modals when clicking the blur layer
  blurLayer.addEventListener("click", () => {
    loginModal.classList.add("hidden")
    signinModal.classList.add("hidden")
    blurLayer.classList.add("hidden")
  })
  
  // Switch from Login to Sign Up
  goToSignIn.addEventListener("click", (event) => {
    event.preventDefault()
    loginModal.classList.add("hidden")
    signinModal.classList.remove("hidden")
  })
  
  // Switch from Sign Up to Login
  goToLogin.addEventListener("click", (event) => {
    event.preventDefault()
    signinModal.classList.add("hidden")
    loginModal.classList.remove("hidden")
  })
  
  // Carousel functionality
  const carousel = document.getElementById("mainCarousel")
  const carouselInner = carousel.querySelector(".flex")
  const prevButton = document.getElementById("prevButton")
  const nextButton = document.getElementById("nextButton")
  const indicators = carousel.querySelectorAll(".bottom-4 button")
  let currentIndex = 0
  
  function showSlide(index) {
    carouselInner.style.transform = `translateX(-${index * 100}%)`
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("bg-opacity-100", i === index)
      indicator.classList.toggle("bg-opacity-50", i !== index)
    })
    currentIndex = index
  }
  
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + 5) % 5
    showSlide(currentIndex)
  })
  
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % 5
    showSlide(currentIndex)
  })
  
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => showSlide(index))
  })
  
  // Auto-play (optional)
  setInterval(() => {
    currentIndex = (currentIndex + 1) % 5
    showSlide(currentIndex)
  }, 5000)
  
