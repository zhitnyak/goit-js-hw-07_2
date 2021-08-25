const totalFn = () => {
  const totalItemEl = document.querySelectorAll(".item");
  console.log(`В списке ${totalItemEl.length} категории.`);

  totalItemEl.forEach((el) => {
    console.log(`Категория: ${el.querySelector("h2").textContent}`);
    console.log(`Количество элементов: ${el.querySelectorAll("li").length}`);
  });
};

totalFn();
