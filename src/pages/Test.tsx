export default function test() {
  const cardInfo = [1, 2, 3];

  return (
    <div className="relative h-screen overflow-hidden bg-slate-600 bg-[url('/assets/home/background-home-desktop.jpg')] ">
      <ul className="absolute flex h-screen">
        {cardInfo.map((card, i) => (
          <li key={i} className="w-screen">
            <p>{`card ${card}`}</p>
            <p className="text-4xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              inventore laboriosam distinctio molestiae commodi eos quae,
              doloremque ut quaerat at ullam. Voluptatem quisquam odit veritatis
              at labore! Ratione, incidunt obcaecati! Voluptates atque
              consequatur, velit consectetur ipsum veniam nostrum et ut ipsam
              tenetur voluptatem veritatis nobis, aperiam vel ullam quia nemo
              ea? Iste, tempora laudantium. Beatae quis ducimus quibusdam error
              architecto! Dolore possimus vel quisquam. Aspernatur officia, nam
              praesentium laboriosam ipsam iste quis culpa natus rem dignissimos
              sapiente perspiciatis adipisci porro animi quibusdam. Quibusdam
              exercitationem fugiat repellat iure maiores perferendis
              voluptatum? Distinctio, atque blanditiis laboriosam, et quae
              asperiores facere eius laudantium dolores vitae ex itaque in
              adipisci dolorem ducimus, ab corrupti ea? Odio commodi nihil
              optio? Nulla officiis quibusdam natus enim? Quo, saepe sapiente ex
              quaerat perspiciatis modi sit iusto? Ipsa repudiandae, dicta error
              libero tempora fugiat dolores, quasi incidunt temporibus culpa
              iure blanditiis dolorum facere praesentium, deserunt magnam
              laboriosam doloremque. Expedita, deserunt voluptatum ad harum
              accusamus in odit. Eius incidunt quos veritatis non debitis,
              reprehenderit architecto amet voluptates tenetur eos neque in ea
              odit eligendi rerum illo sint dicta consequuntur! Recusandae nulla
              repellat sapiente dolore inventore voluptatem reiciendis dolorum.
              Inventore sapiente assumenda eum libero mollitia sunt dolor atque
              optio. Eum quas aut magnam doloremque suscipit doloribus! Nemo
              repudiandae ducimus ab. Non inventore debitis quas pariatur unde
              rerum cumque culpa neque mollitia exercitationem sit, ducimus modi
              reprehenderit officia? Explicabo quae totam accusantium earum
              repudiandae sunt beatae sed ab provident, dignissimos iste. Iusto
              velit commodi asperiores in ut alias dolorum dolores odio ab
              cupiditate ad rem nobis nam quae ratione amet exercitationem illo,
              deleniti a eaque rerum maxime earum nihil dolor? Cupiditate.
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
