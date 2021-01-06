const choices = () => {

  if (document.getElementById("retard")) {
    const retard = document.getElementById("retard");
    const surbooking = document.getElementById("surbooking");
    const annulation = document.getElementById("annulation");
    const buttonFinal = document.querySelector(".wrapper-valid");
    const genreItem = document.querySelectorAll(".genre-item");

    genreItem[0].addEventListener("click", (event) => {
      retard.classList.remove("hidden");
      surbooking.classList.add("hidden");
      annulation.classList.add("hidden");
      retard.innerText = "";
      surbooking.innerText = "";
      annulation.innerText = "";
      retard.insertAdjacentHTML('afterbegin', `      <h2>Le temps de retard etait:</h2>
      <fieldset class="form-group radio_buttons optional form_delay"><legend class="col-form-label pt-0">Delay</legend><input type="hidden" name="form[delay]" value=""><div class="form-check"><input class="form-check-input radio_buttons optional" type="radio" value="Supérieur ou égal à 3h" name="form[delay]" id="form_delay_supérieur_ou_égal_à_3h"><label class="form-check-label collection_radio_buttons" for="form_delay_supérieur_ou_égal_à_3h">Supérieur ou égal à 3h</label></div><div class="form-check"><input class="form-check-input radio_buttons optional" type="radio" value="Inférieur à 3h" name="form[delay]" id="form_delay_inférieur_à_3h"><label class="form-check-label collection_radio_buttons" for="form_delay_inférieur_à_3h">Inférieur à 3h</label></div></fieldset>
      <h2>Pour quelle raison?</h2>
      <fieldset class="form-group radio_buttons optional form_reason"><legend class="col-form-label pt-0">Reason</legend><input type="hidden" name="form[reason]" value=""><div class="form-check"><input class="form-check-input radio_buttons optional" type="radio" value="Grève" name="form[reason]" id="form_reason_grève"><label class="form-check-label collection_radio_buttons" for="form_reason_grève">Grève</label></div><div class="form-check"><input class="form-check-input radio_buttons optional" type="radio" value="Conditions metéorologiques" name="form[reason]" id="form_reason_conditions_metéorologiques"><label class="form-check-label collection_radio_buttons" for="form_reason_conditions_metéorologiques">Conditions metéorologiques</label></div><div class="form-check"><input class="form-check-input radio_buttons optional" type="radio" value="Autre" name="form[reason]" id="form_reason_autre"><label class="form-check-label collection_radio_buttons" for="form_reason_autre">Autre</label></div></fieldset>`);
      buttonFinal.classList.remove("hidden");
    })

    genreItem[1].addEventListener("click", (event) => {
      retard.classList.add("hidden");
      annulation.classList.remove("hidden");
      surbooking.classList.add("hidden");
      retard.innerText = "";
      surbooking.innerText = "";
      annulation.innerText = "";
      annulation.insertAdjacentHTML('afterbegin', `<h2>Vous avez été informé il y a:</h2>
      <fieldset class="form-group radio_buttons optional form_delay"><legend class="col-form-label pt-0">Delay</legend><input type="hidden" name="form[delay]" value=""><div class="form-check"><input class="form-check-input radio_buttons optional" type="radio" value="Plus de 14 jours" name="form[delay]" id="form_delay_plus_de_14_jours"><label class="form-check-label collection_radio_buttons" for="form_delay_plus_de_14_jours">Plus de 14 jours</label></div><div class="form-check"><input class="form-check-input radio_buttons optional" type="radio" value="Entre 14 jours et 7 jours" name="form[delay]" id="form_delay_entre_14_jours_et_7_jours"><label class="form-check-label collection_radio_buttons" for="form_delay_entre_14_jours_et_7_jours">Entre 14 jours et 7 jours</label></div><div class="form-check"><input class="form-check-input radio_buttons optional" type="radio" value="Moins de 7 jours" name="form[delay]" id="form_delay_moins_de_7_jours"><label class="form-check-label collection_radio_buttons" for="form_delay_moins_de_7_jours">Moins de 7 jours</label></div><div class="form-check"><input class="form-check-input radio_buttons optional" type="radio" value="Jamais" name="form[delay]" id="form_delay_jamais"><label class="form-check-label collection_radio_buttons" for="form_delay_jamais">Jamais</label></div></fieldset>
      <h2>Un réacheminement vous a été proposé avec:</h2>
      <fieldset class="form-group radio_buttons optional form_reason"><legend class="col-form-label pt-0">Reason</legend><input type="hidden" name="form[reason]" value=""><div class="form-check"><input class="form-check-input radio_buttons optional" type="radio" value="2h plus tôt avant le départ prévu" name="form[reason]" id="form_reason_2h_plus_tôt_avant_le_départ_prévu"><label class="form-check-label collection_radio_buttons" for="form_reason_2h_plus_tôt_avant_le_départ_prévu">2h plus tôt avant le départ prévu</label></div><div class="form-check"><input class="form-check-input radio_buttons optional" type="radio" value="1h plus tôt avant le départ prévu" name="form[reason]" id="form_reason_1h_plus_tôt_avant_le_départ_prévu"><label class="form-check-label collection_radio_buttons" for="form_reason_1h_plus_tôt_avant_le_départ_prévu">1h plus tôt avant le départ prévu</label></div><div class="form-check"><input class="form-check-input radio_buttons optional" type="radio" value="Entre 0h et 2h plus tard après l'arrivée prévue" name="form[reason]" id="form_reason_entre_0h_et_2h_plus_tard_après_larrivée_prévue"><label class="form-check-label collection_radio_buttons" for="form_reason_entre_0h_et_2h_plus_tard_après_larrivée_prévue">Entre 0h et 2h plus tard après l'arrivée prévue</label></div><div class="form-check"><input class="form-check-input radio_buttons optional" type="radio" value="Entre 2h et 4h plus tard après l'arrivée prévue" name="form[reason]" id="form_reason_entre_2h_et_4h_plus_tard_après_larrivée_prévue"><label class="form-check-label collection_radio_buttons" for="form_reason_entre_2h_et_4h_plus_tard_après_larrivée_prévue">Entre 2h et 4h plus tard après l'arrivée prévue</label></div><div class="form-check"><input class="form-check-input radio_buttons optional" type="radio" value="Autre / Pas de reacheminement" name="form[reason]" id="form_reason_autre__pas_de_reacheminement"><label class="form-check-label collection_radio_buttons" for="form_reason_autre__pas_de_reacheminement">Autre / Pas de reacheminement</label></div></fieldset>`);
      buttonFinal.classList.remove("hidden");
    })

    genreItem[2].addEventListener("click", (event) => {
      retard.classList.add("hidden");
      surbooking.classList.remove("hidden");
      annulation.classList.add("hidden");
      retard.innerText = "";
      surbooking.innerText = "";
      annulation.innerText = "";
      surbooking.insertAdjacentHTML('afterbegin', ` <h2>Vous avez été prévenu:</h2>
      <fieldset class="form-group radio_buttons optional form_delay"><legend class="col-form-label pt-0">Delay</legend><input type="hidden" name="form[delay]" value=""><div class="form-check"><input class="form-check-input radio_buttons optional" type="radio" value="Avant d'arriver à l'aéroport" name="form[delay]" id="form_delay_avant_darriver_à_laéroport"><label class="form-check-label collection_radio_buttons" for="form_delay_avant_darriver_à_laéroport">Avant d'arriver à l'aéroport</label></div><div class="form-check"><input class="form-check-input radio_buttons optional" type="radio" value="À l'aéroport" name="form[delay]" id="form_delay_à_laéroport"><label class="form-check-label collection_radio_buttons" for="form_delay_à_laéroport">À l'aéroport</label></div></fieldset>
      <h2>Vous n'êtes pas monté a bord:</h2>
      <fieldset class="form-group radio_buttons optional form_reason"><legend class="col-form-label pt-0">Reason</legend><input type="hidden" name="form[reason]" value=""><div class="form-check"><input class="form-check-input radio_buttons optional" type="radio" value="De votre gré" name="form[reason]" id="form_reason_de_votre_gré"><label class="form-check-label collection_radio_buttons" for="form_reason_de_votre_gré">De votre gré</label></div><div class="form-check"><input class="form-check-input radio_buttons optional" type="radio" value="Contre votre gré" name="form[reason]" id="form_reason_contre_votre_gré"><label class="form-check-label collection_radio_buttons" for="form_reason_contre_votre_gré">Contre votre gré</label></div></fieldset>`);
      buttonFinal.classList.remove("hidden");
    })
  };
}

export { choices }
