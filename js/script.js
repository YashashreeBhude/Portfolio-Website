    const titles = [
      "Java Developer",
      "Full-Stack Developer",
      "Web Developer",
      "MERN Stack Developer",
      "Creative Coder"
    ];

    let index = 0;
    const titleElement = document.getElementById('title');

    function changeTitle() {
      // Shrink out
      titleElement.classList.remove('shrink-in');
      titleElement.classList.add('shrink-out');

      setTimeout(() => {
        // Change the title text
        titleElement.textContent = titles[index];
        index = (index + 1) % titles.length;

        // Shrink in
        titleElement.classList.remove('shrink-out');
        titleElement.classList.add('shrink-in');
      }, 400); // match transition time
    }

    // Initial show
    changeTitle();
    setInterval(changeTitle, 2500); // every 2.5 seconds