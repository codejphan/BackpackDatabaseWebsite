// Class to create the objects in the product grid
class Product {
  constructor(name, category, gender, image, description, color, price) {
    this.name = name;
    this.category = category;
    this.gender = gender;
    this.image = image;
    this.description = description;
    this.color = color;
    this.price = price;
  }
}

// Products created from class to objects

const products = [
  new Product(
    "Glacier 50",
    "outdoor",
    "male",
    "https://www.mysteryranch.com/Products/Glacier%2050%20Men's%20113193_buckskin-10.jpg?resizeid=2&resizeh=300&resizew=300",
    `Packing more while suffering less isn't just possible,
                        it's the GLACIER 50's answer to getting the most out of
                        (or into) backpacking minimalism.`,
    "green",
    300.0
  ),
  new Product(
    "Glacier 50",
    "outdoor",
    "female",
    "https://www.mysteryranch.com/Products/Glacier%2050%20Women's%20113273_dove-10.jpg?resizeid=2&resizeh=300&resizew=300",
    `Packing more while suffering less isn't just possible,
                        it's the GLACIER 50's answer to getting the most out of
                        (or into) backpacking minimalism.`,
    "grey",
    280.0
  ),
  new Product(
    "Bridger 45",
    "outdoor",
    "male",
    "https://www.mysteryranch.com/Products/Bridger%2045%20Men's%20112818_medallion-10.jpg?resizeid=2&resizeh=300&resizew=300",
    `Whether you’re packing for a sunrise-to-sunset day hike
                        or making a weekend getaway into the wilderness, the
                        BRIDGER 45 was built to not just meet but exceed your
                        mission needs.`,
    "yellow",
    325.0
  ),
  new Product(
    "Bridger 45",
    "outdoor",
    "female",
    "https://www.mysteryranch.com/Products/Bridger%2045%20Women's%20112851_dove-10.jpg?resizeid=2&resizeh=300&resizew=300",
    `Whether you’re packing for a sunrise-to-sunset day hike
                        or making a weekend getaway into the wilderness, the
                        BRIDGER 45 was built to not just meet but exceed your
                        mission needs.`,
    "grey",
    320.0
  ),
  new Product(
    "Popup 30",
    "hunting",
    "male",
    "https://www.mysteryranch.com/Products/Pop%20Up%2030L%20Men's%20113290_ponderosa-10.jpg?resizeid=2&resizeh=300&resizew=300",
    `A new generation hunting pack, the POP-UP 30 stays
                        low-profile and functional during your hunt but
                        transforms into a first-rate meat hauler when it’s time
                        to pack out.`,
    "green",
    450.0
  ),
  new Product(
    "Popup 30",
    "hunting",
    "female",
    "https://www.mysteryranch.com/Products/Pop%20Up%2030L%20Women's%20113291_optifade%20subalpine-10.jpg?resizeid=2&resizeh=300&resizew=300",
    `A new generation hunting pack, the POP-UP 30 stays
                        low-profile and functional during your hunt but
                        transforms into a first-rate meat hauler when it’s time
                        to pack out.`,
    "camo",
    480.0
  ),
  new Product(
    "Marshall 105",
    "hunting",
    "male",
    "https://www.mysteryranch.com/Products/Marshall%20105%20Men's%20113181_gneiss-10.jpg?resizeid=2&resizeh=300&resizew=300",
    `The hunt looks different with MYSTERIUM. Meet our
                        largest expedition pack—built to support your long-game
                        and to bag your big game.`,
    "grey",
    600.0
  ),
  new Product(
    "Marshall 105",
    "hunting",
    "female",
    "https://www.mysteryranch.com/Products/Marshall%20105%20Women's%20113264_optifade%20subalpine-20.jpg?resizeid=2&resizeh=300&resizew=300",
    `The hunt looks different with MYSTERIUM. Meet our
                        largest expedition pack—built to support your long-game
                        and to bag your big game.`,
    "camo",
    600.0
  ),
  new Product(
    "Blackjack 100",
    "military",
    "male",
    "https://www.mysteryranch.com/Products/Blackjack%20100%20110248_coyote-10.jpg?resizeid=2&resizeh=300&resizew=300",
    `The BLACKJACK 100 is designed after the standard-issue
                        packs for USSOCOM, the SPEAR RECCE. The BLACKJACK 100
                        features lightweight, full carbon frame stays,
                        Dyneema-CORDURA® laminate, IR-compliant zippers, and
                        lightweight bolsters.`,
    "tan",
    450.0
  ),
  new Product(
    "Gunfighter 24",
    "military",
    "male",
    "https://www.mysteryranch.com/Products/Gunfighter%2024%20112806_multicam-10.jpg?resizeid=2&resizeh=300&resizew=300",
    `A low-profile, everyday pack that supplies the
                        mission-specific needs you require.`,
    "camo",
    300.0
  ),
  new Product(
    "2 Day Assault",
    "everyday",
    "male",
    "https://www.mysteryranch.com/Products/2%20Day%20Assault%20111183_black-10.jpg?resizeid=2&resizeh=300&resizew=300",
    `Retaining the aesthetics of the original 3 Day Assault,
                        our latest version, the 2 DAY is a scaled down version
                        for your everyday urban missions. Its signature 3-ZIP
                        design provides ready access to the pack's contents.`,
    "black",
    290.0
  ),
  new Product(
    "Catalyst 22",
    "everyday",
    "male",
    "https://www.mysteryranch.com/Products/Catalyst%2022%20112900_hummus-10.jpg?resizeid=2&resizeh=300&resizew=300",
    `You don’t have to compromise with this tough backpack.
                        The CATALYST 22 can be used both in the office and on
                        the trail.`,
    "tan",
    120.0
  ),
  new Product(
    "Catalyst 22",
    "everyday",
    "female",
    "https://www.mysteryranch.com/Products/Catalyst%2026%20112901_ponderosa-10.jpg?resizeid=2&resizeh=300&resizew=300",
    `A versatile pack built to withstand any urban adventure.
                        With its tough CORDURA® body, it’s ready for the
                        outdoors too.`,
    "green",
    145.0
  ),
  new Product(
    "Fullmoon",
    "everyday",
    "male",
    "https://www.mysteryranch.com/Products/Full%20Moon%20111178_wildflower-10.jpg?resizeid=2&resizeh=300&resizew=300",
    `Conveniently stash everything you want to keep easily
                        accessible, and then some.`,
    "pink",
    80.0
  ),
  new Product(
    "District 18",
    "everyday",
    "male",
    "https://www.mysteryranch.com/Products/District%2018%20112769_black-10.jpg?resizeid=2&resizeh=300&resizew=300",
    `The brainchild-blend of our fan-favorite packs – the
                        DISTRICT 18 – hits home with easy access, detailed
                        organization, a laptop sleeve, and bottle pockets. `,
    "black",
    220.0
  ),
  new Product(
    "Missiondopp",
    "accessories",
    "male",
    "https://www.mysteryranch.com/Products/Mission%20Dopp%20113227%20113228_ponderosa-s-10.jpg?resizeid=2&resizeh=300&resizew=300",
    `Leave no toothbrush or hair clip behind! Compact and
                        versatile, the MISSION DOPP is a multifaceted toiletries
                        kit designed to hold everything you’ll need for a quick
                        getaway.`,
    "green",
    40.0
  ),
  new Product(
    "Mission Control",
    "accessories",
    "male",
    "https://www.mysteryranch.com/Products/Mission%20Control%20113068%20113069%20113070_black-s-10.jpg?resizeid=2&resizeh=300&resizew=300",
    `Organizing your power cords is a power move. The MISSION
                        CONTROL is a durable padded pouch designed to keep all
                        of your electronic devices protected and easily
                        accessible when traveling.`,
    "black",
    38.0
  ),
  new Product(
    "Hydrapak",
    "accessories",
    "male",
    "https://www.mysteryranch.com/Products/Hydrapak%203.1L%20OHY%20Reservoir%20111157_black-10.jpg?resizeid=2&resizeh=300&resizew=300",
    `3.1 Liters, baffled, valved, CAL FIRE Approved Hydration
                        Reservoir with an incorporated dust cover and the best
                        burst-strength in the business.`,
    "grey",
    49.0
  ),
];

// Function to map objects into the html to fill product grid
function renderProducts(productArray) {
  const productGrid = document.getElementById("productGrid");
  productGrid.innerHTML = productArray
    .map(
      (product) => `
      <div class="col-md-4 my-4">
        <div class="card h-100">
          <img src="${product.image}" class="card-img-top" alt="${
        product.name
      }">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">$${product.price.toFixed(2)}</p>
            <small class="text-muted">${product.description}</small>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

// This section of code is when you search and filter using the sidebar. To narrow down the product items.
function filterAndRender() {
  const searchText = document.getElementById("searchInput").value.toLowerCase();
  const selectedCategory = document.getElementById("categorySelect").value;
  const selectedGender = document.getElementById("genderSelect").value;
  const selectedcolor = document.getElementById("colorList").value;
  const minPrice = parseFloat(document.getElementById("minPrice").value) || 0;
  const maxPrice =
    parseFloat(document.getElementById("maxPrice").value) || Infinity;

  const filtered = products.filter((product) => {
    const matchesText = product.name.toLowerCase().includes(searchText);
    const matchesCategory =
      !selectedCategory || product.category === selectedCategory;
    const matchesGender = !selectedGender || product.gender === selectedGender;
    const matchescolor = !selectedcolor || product.color === selectedcolor;
    const matchesPrice = product.price >= minPrice && product.price <= maxPrice;

    return (
      matchesText &&
      matchesCategory &&
      matchesGender &&
      matchescolor &&
      matchesPrice
    );
  });

  renderProducts(filtered);
}

// Add event listeners for all filters
[
  "searchInput",
  "categorySelect",
  "genderSelect",
  "colorList",
  "minPrice",
  "maxPrice",
].forEach((id) => {
  document.getElementById(id).addEventListener("input", filterAndRender);
  document.getElementById(id).addEventListener("change", filterAndRender);
});

// Clear filters button
document.getElementById("clearFilters").addEventListener("click", () => {
  document.getElementById("searchInput").value = "";
  document.getElementById("categorySelect").value = "";
  document.getElementById("genderSelect").value = "";
  document.getElementById("colorList").value = "";
  document.getElementById("minPrice").value = "";
  document.getElementById("maxPrice").value = "";
  filterAndRender();
});

// Initial render
renderProducts(products);
