export default function Specials() {
  const specialsData = [
    {
      id: 1,
      name: "Greek salad",
      price: "$12.99",
      description: "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
      icon: "fas fa-leaf"
    },
    {
      id: 2,
      name: "Bruschetta",
      price: "$5.99",
      description: "Our Bruschetta is made from grilled bread that has been topped with garlic, seasoned with salt and olive oil.",
      image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop",
      icon: "fas fa-bread-slice"
    },
    {
      id: 3,
      name: "Lemon Dessert",
      price: "$5.00",
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
      icon: "fas fa-lemon"
    }
  ];

  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This weeks' specials!</h2>
        <button className="online-menu-btn">Online Menu</button>
      </div>
      <div className="specials-grid">
        {specialsData.map((special) => (
          <div key={special.id} className="special-card">
            <img src={special.image} alt={special.name} />
            <div className="card-content">
              <div className="card-header">
                <h3>{special.name}</h3>
                <span className="price">{special.price}</span>
              </div>
              <p>{special.description}</p>
              <button className="order-btn"><i className="fas fa-truck"></i> Order a delivery</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
