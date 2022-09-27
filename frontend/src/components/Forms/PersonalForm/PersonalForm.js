import React, { useState } from "react";
import Password from "../Password/Password";
import Checkbox from "../Checkbox/Checkbox";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import styles from "./PersonalForm.module.css";

const PersonalForm = () => {
  const [country, setCountry] = useState("Portugal");
  const [region, setRegion] = useState("");

  const selectCountryHandler = (val) => {
    setCountry(val);
  };

  const selectRegionHandler = (val) => {
    setRegion(val);
  };

  return (
    <>
      <form onSubmit>
        <div>
          <label>Morada:*</label>
          <input type="text" />
        </div>
        <div>
          <label>País:*</label>
          <CountryDropdown
            defaultOptionLabel="--Selecione o País--"
            value={country}
            onChange={(val) => selectCountryHandler(val)}
          />
        </div>
        <div>
          <label>Estado/Região:*</label>
          <RegionDropdown
            defaultOptionLabel="--Selecione o Estado--"
            disableWhenEmpty={true}
            country={country}
            value={region}
            onChange={(val) => selectRegionHandler(val)}
          />
        </div>
        <div>
          <label>Cidade:*</label>
          <input type="text" />
        </div>
        <div>
          <label>Código Postal:*</label>
          <input type="text" />
        </div>
        <div>
          <label>Nome Completo:*</label>
          <input type="text" />
        </div>
        <div>
          <label>NIF Contribuinte:*</label>
          <input type="text" />
        </div>
        <div>
          <label>Email:*</label>
          <input type="text" />
        </div>
        <Password label="Password:*" />
        <Password label="Confirme Nova Password*" />
        <Checkbox label="Li e concordo com os Termos e Condições*" />
        <Checkbox label="A PT TRAINING recolhe dados informativos do usuário. Li e Concordo com a nossa Privacy Policy." />
        <button type="button">Subscrever</button>
      </form>
      <p>
        Acesso válido após, o pagamento efectuado por transferência bancária ou
        depósito directo na nossa conta. IBAN: PT50 003300004564015394805, LILAS
        ABSTRATO UNIP LDA. Por favor envie o seu comprovativo para
        geral@pt-training.pt e indique o Primeiro e Ultimo Nome juntamente com o
        nome de utilizador/membro.
      </p>
    </>
  );
};

export default PersonalForm;
