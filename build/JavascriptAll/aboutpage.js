// Target the aboutContainer div
const aboutContainer = document.getElementById("aboutcontainer");

// Optimized object structure
let aboutData = {
  missionVision: [
    {
      title: "Our Mission",
      desc: "Our mission is to provide comprehensive biotechnology education to students from diverse backgrounds, bridging rural and urban divides in alignment with the principles of the New Education Policy 2020. We aim to promote interdisciplinary approaches to biological sciences, offering a flexible and modular curriculum that empowers students to tailor their educational journeys. Our goal is to foster creativity and innovation among students by encouraging participation in cutting-edge research, industry-driven internships, and hands-on experiential learning in the dynamic field of biotechnology.",
    },
    {
      title: "Our Vision",
      desc: "To be a leading institution in biotechnology education, empowering students to become innovative problem-solvers and contributing to advancements in biological sciences and societal well-being.",
    },
  ],
  history: {
    title: "Our History",
    desc: "The Biotechnology Department at Govt. Nirbhay Singh Patel Science College, Indore, is part of an institution with a rich legacy dating back to 1989. Originally known as the Government New Science College, the college was renamed in memory of Late Shri Nirbhay Singh Patel, a freedom fighter and former Forest Minister of Madhya Pradesh. The department is committed to providing quality education in the field of biotechnology, catering to both urban and rural students with a vision of inclusivity and excellence.The department offers a B.Sc. in Biotechnology, along with interdisciplinary opportunities in biology and chemistry, aligning with the latest trends in the scientific community. The New Education Policy 2020 (NEP) framework is fully implemented, offering a flexible curriculum with vocational subjects, internships, and research projects, aimed at the holistic development of students.The Biotechnology Department is equipped with state-of-the-art laboratories to support practical learning and advanced research. The college’s Wi-Fi-enabled campus also features smart classrooms with interactive boards, enabling a modern, technology-driven learning environment.Our students benefit from various scholarship schemes provided by the Department of Higher Education and the Government of India, ensuring equitable access to education. We encourage active participation in sports and fitness activities, with access to a well-equipped gym, an international-standard basketball court, and other sports facilities.With a team of highly qualified faculty, the department ensures that students are not only academically prepared but also equipped with skills to contribute meaningfully to society. The integration of internships, fieldwork, and community projects fosters an environment of experiential learning, preparing students for the demands of the biotechnology industry and research sectors.",
  },
};

// Generate HTML content
let aboutHTML = `
  <div class="container my-5">
    <!-- Mission & Vision Section -->
    <div class="row mb-4">
      ${aboutData.missionVision
        .map(
          (item) => `
        <div class="col-md-6">
          <h2 class="about-cont-heading">${item.title}</h2>
          <p>${item.desc}</p>
        </div>
      `
        )
        .join("")}
    </div>

    <!-- History Section -->
    <div class="row mb-4">
      <div class="col">
        <h2 class="about-cont-heading">${aboutData.history.title}</h2>
        <p>${aboutData.history.desc}</p>
      </div>
    </div>
  </div>
`;

// Inject the HTML into the aboutContainer
aboutContainer.innerHTML = aboutHTML;
