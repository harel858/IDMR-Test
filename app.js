import { cards } from "./cards.js";

function getCardTemplate(cards) {
  let html = ``;
  cards.forEach((card) => {
    html += `<div class="card ${card.status}">
      <div class="statusContainer"><span class="status ${card.status}">${card.status}</span> <p>767 N149</p> <p>A-28-WO-</p></div>
      <h3 class="title">${card.title}</h3>
      <div class="footer">
      <div><p class="${card.status}">Completion</p><p>${card.completion}%</p></div>
      <div><p class="${card.status}">Code</p><p>${card.code}</p></div>
      <div><p class="${card.status}">AD</p><p>${card.AD}</p></div>
      </div>
    </div>`;
  });
  return html;
}

function displayCards(cards) {
  const container = document.querySelector(`.root`);
  const cardHtml = getCardTemplate(cards);
  container.innerHTML = cardHtml;
}

displayCards(cards);
