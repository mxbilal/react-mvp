import React, { useEffect } from 'react'

const IntersectionObserverPage = () => {

  const oncify = (convertMe) => {
    let counter = 0;

    const inner = (input) => {


      if (counter === 0) {
        const output = convertMe(input)
        counter++;
        return output
      } else { return "Sorry" }
    }
    return inner;
  }

  const multiplyBy2 = num => num * 2;

  const oncifiedMultiplyBy2 = oncify(multiplyBy2);

  console.log(oncifiedMultiplyBy2(10));
  console.log(oncifiedMultiplyBy2(7));
  console.log(oncifiedMultiplyBy2(25));
  useEffect(() => {
    const cards = document.querySelectorAll(".observer-card")
    console.log(cards)
    const observer = new IntersectionObserver(entries => {
      entries.map(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    }, {
      threshold: 1,
      rootMargin: '-100px'
    })
    cards.forEach(card => { observer.observe(card) })
    return () => {
      cards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, [])
  return (
    <div className='intersection-ob-main'>
      <div>
        {Array(15).fill(0).map((a, i) => <div key={i} className='observer-card'>Intersection observer</div>)}
      </div>
      <div>
        <p> intersection observer is observing when ever element passed off the screen it will be disappeared, as my root margin is -100px so it will look from 100px</p>
      </div>
    </div>
  )
}

export default IntersectionObserverPage
