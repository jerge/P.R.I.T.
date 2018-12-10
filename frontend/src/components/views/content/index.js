import React from "react";

import {
  ContentContainer,
  LargeText,
  LargeSerifText,
  RegularSerifText,
  MailLink,
  NameList,
  LineBreak,
  Emphasis,
  Turquoise
} from "./styles";
import {
  /*ChefChefContent, KassChefContent, OhlChefContent, MaterialChefContent, PRChefContent, MatChefContent, BryChefContent,*/ TempMemberContent
} from "../members";
import {
  Prit17,
  Prit16,
  Prit15,
  Prit14,
  Prit13,
  Prit12,
  Prit11,
  Prit10,
  Prit09,
  Prit08,
  Prit07,
  Prit06,
  Prit05,
  Prit04
} from "../patetname";

export const HomeContent = () => (
  <ContentContainer>
    <LargeSerifText>
      <Emphasis>Det</Emphasis> är vi som är{" "}
      <Turquoise to="/omprit">P.R.I.T.</Turquoise>, IT-sektionens kombinerade
      PR-kommitté och Rustmästeri. <LineBreak />
      <Emphasis>Vi värnar och hedrar</Emphasis> den{" "}
      <Turquoise to="/riktigturkos">turkosa</Turquoise> kulören, smurfen, och
      mycket annat sektionsrelaterat genom våra arrangemang i sektionslokalen{" "}
      <Turquoise to="/hubben">Hubben 2.1.</Turquoise>
      <LineBreak />
      <Emphasis>Vårt uppdrag</Emphasis> är att se till att alla IT-teknologer
      får en så trevlig och underhållande Chalmerstid som möjligt, vare sig det
      gäller hela och rena studiemiljöer eller pubar att besöka efter studierna.{" "}
      <LineBreak />
      <Emphasis>Inte minst</Emphasis> har vi pubrundan som hålls en gång per
      läsperiod, då <Turquoise to="/hubben">Hubben 2.1</Turquoise> förvandlas
      till en färgglad karaokepub.
    </LargeSerifText>
  </ContentContainer>
);

export const HubbenContent = () => (
  <ContentContainer>
    <LargeText>Vad är Hubben</LargeText>
    <RegularSerifText>
      Hubben är IT:s sektionslokal. Här samlas gemene teknolog dagligen för att
      luncha, plugga och umgås. Det finns ett kök med flertalet mikrovågsugnar,
      några kokplattor, diskmaskin, kylskåp och även en varuautomat.
    </RegularSerifText>
    <LargeText>Var ligger Hubben</LargeText>
    <RegularSerifText>
      Hubben kan hittas på Hörsalsvägen 9, Campus Johanneberg
    </RegularSerifText>
    <LargeText>Boka Hubben</LargeText>
    <RegularSerifText>
      Hubben kan bokas av kommiteér och föreningar. Som föreningsaktiv på
      IT-sektionen kan du gå in på chalmers.it och använda bokningssystemet. Som
      teknolog på Chalmers kan du skicka ett mail till{" "}
      <MailLink href="mailto:prit@chalmers.it.">prit@chalmers.it</MailLink>. Om
      bokningen sker i samband med mottagningen kan du istället maila{" "}
      <MailLink href="mailto:nollkit@chalmers.it.">
        nollkit@chalmers.it
      </MailLink>{" "}
      då de bestämmer över hubben under mottagningsperioden.
    </RegularSerifText>
    <LargeText>Förslag / felanmälan</LargeText>
    <RegularSerifText>
      Om du har några önskemål eller om något är trasigt kan du upplysa oss om
      det genom våran förslagslåda i Hubben eller skicka ett e-brev till{" "}
      <MailLink href="mailto:prit@chalmers.it.">prit@chalmers.it</MailLink>
    </RegularSerifText>
  </ContentContainer>
);

export const AboutContent = () => (
  <ContentContainer>
    <NameList>
      <TempMemberContent />
      {/* <ChefChefContent/>
            <KassChefContent/>
            <OhlChefContent/>
            <MaterialChefContent/>
            <PRChefContent/>
            <MatChefContent/>
            <BryChefContent/> */}
    </NameList>
  </ContentContainer>
);

export const PatetContent = () => (
  <ContentContainer>
    <Prit17 />
    <Prit16 />
    <Prit15 />
    <Prit14 />
    <Prit13 />
    <Prit12 />
    <Prit11 />
    <Prit10 />
    <Prit09 />
    <Prit08 />
    <Prit07 />
    <Prit06 />
    <Prit05 />
    <Prit04 />
  </ContentContainer>
);
