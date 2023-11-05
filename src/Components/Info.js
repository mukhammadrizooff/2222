import React from "react";
import InformationCard from "./InformationCard";
import {
  faHeartPulse,
  faTruckMedical,
  faTooth,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Dorilar nima qiladi</span>
        </h3>
        <p className="info-description">
          Dorilar kimyo-farmatsevtika zavodlarida sintetik moddalardan,
          oʻsimlik, hayvon yoki mikrobiologik mahsulotlardan, tez buziladigan
          ayrim Dorilar esa dorixonalarda tayyorlanadi. Dorilar turli xilda,
          mas, suyuq (qaynatma, tindirma, eritma, suspenziya va boshqalar),
          yumshoq (surtma, liniment, krem, pasta va boshqalar), qattiq (sochma,
          tabletka, draje, granula va boshqalar) hamda alohida inʼyeksiya
          maqsadlari uchun ampula holida chiqariladi.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Tez Yordamda Ishlatiladigon Dorilar"
          description="Bitta tez tibbiy yordam ko‘rsatish xizmati brigadasi uchun zarur bo‘lgan dori vositalari va tibbiy buyumlari ro‘yxatiga tuzatishlar kiritildi. Bu haqda Norma.Uz, Sog‘liqni saqlash vazirligining tegishli buyrug‘iga asoslanib, xabar bermoqda.

          Unga ko‘ra, avgust oyining ikkinchi yarmidan boshlab «tez tibbiy yordam» brigadasi ishi uchun zarur bo‘lgan ayrim tibbiy buyumlarga nisbatan yangi talablar amal qila boshlaydi.
          
          Jumladan, har bir brigadaga kamida 20 juft bir marta ishlatiladigan qo‘lqoplar ajratiladi (hozir – 1 juft). Hajmi 2 g., 5 g. va 10 g. bo‘lgan shpritslar soni har bir turi bo‘yicha 5 donadan 10 donagacha oshiriladi.
          
          Bundan tashqari, har bir brigada uchun zarur bo‘ladigan tibbiy paxta miqdori 100 grammni tashkil qiladi. Steril va nosteril bintlar 2 donadan bo‘lishi kerakligi belgilab qo‘yilgan."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Yurak Xurujida ishlatiladigon dorilar"
          description="Gipertenziya, ateroskleroz, koronar arteriya kasalligi va yuqori qon bosimi (qon bosimi) ko'rinishlari bo'lgan odamlar yurak xuruji va qon tomirlariga eng moyil bo'lganligi sababli, shifokorlar ko'pincha yurak xurujining oldini olish uchun dori-darmonlarni buyuradilar. Giyohvand moddalar, masalan, qon pıhtılarının shakllanishiga to'sqinlik qiladi. Qirq yildan keyin eng keng tarqalgan uchrashuv - Aspirin. Asetilsalitsil kislotasi, dorixonalarda bu dori ko'pincha shunday deb ataladi, minimal dozada - tushdan keyin bir marta 100 mg buyuriladi. Aspirin qon hujayralarining to'planish qobiliyatini pasaytiradi (pıhtılaşma). Natijada mikrosirkulyatsiya yaxshilanadi va tromboz xavfi kamayadi. Ammo preparat bir qator kontrendikatsiyaga ega, ularning asosiylari qon ketish tendentsiyasi, gemofiliya, oshqozon yarasi."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Tish Ogrigandagi DOrilar"
          description="Tish og’rig’ini to’xtatish uchun eng samarali NYQP — ketoprofen («Ketanov», «Ketorol», «Ketorolak» va boshqalar) va Deksketoprofen («Deksalgin») saqlovchi vositalar hisoblanadi. Ushbu preparatlar og’riqni 5-6 soat davomida bartaraf etishi mumkin va bir vaqtning o’zida yallig’lanishga qarshi ta’sirga ega. Shuningdek, ushbu propion kislotasi unumlari guruhidagi ibuprofen (Nurofen, MIG, Faspik va boshqalar), naproksen (Sanaproks, Naprios) va flurbiprofenni (Flugalin) ham ta’kidlab o’tish joiz."
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
