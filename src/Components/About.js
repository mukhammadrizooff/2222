import React from "react";
import Doctor from "../Assets/guia-ans.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>Biz Haqimizda</span>
        </h3>
        <p className="about-description">
          Maʼlumki, farmakologik xususiyatga ega boʻlgan koʻplab kimyoviy
          birikmalar xom holatda foydasiz yoki zararli boʻladi. Farmatsevtika
          bunday moddaga maʼlum bir ishlov berish orqali qabul qilish yoʻli va
          qoʻllash usuli bilan bemorlarning maʼlum bir guruhini davolash uchun
          mos keladigan noyob dozalash shaklini ishlab chiqaradi.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Farmaseftni tanlang"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />

        <SolutionStep
          title="Uchrashuv belgilang"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />

        <SolutionStep
          title="Yechimlaringiz"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </div>
    </div>
  );
}

export default About;
