import React from 'react';

function About() {

  return (
    <div className="flex justify-center w-3/5 m-auto pt-20">
      <section className="mt-6">
        <h2 className="text-2xl font-semibold">About This Project</h2>
        <p className="mt-2">
          This project is a comprehensive application designed to manage and display business information effectively. 
          It allows users to perform various operations such as adding, editing, and deleting business entries 
          while providing features like pagination and filtering to enhance user experience.
        </p>
        <p className="mt-2">
          The app is built using React and utilizes Clerk for authentication. It emphasizes a clean UI with responsive design, 
          making it accessible across various devices. Whether you’re managing a small business or a startup, 
          this tool aims to simplify your workflows and increase productivity!
        </p>
      </section>
    </div>
  );
}

export default About;
