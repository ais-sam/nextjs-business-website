import React from 'react'
import PageIntro from 'components/shared/PageIntro'
import Image from 'next/image';
import checkmark from "public/icons/checkmark.svg"

const ServicesText = ({className}) => {
  return (
    <div className={className}>
      <PageIntro>
        Since our machines are produced in compliance with the difficult
        conditions that can be operated 24/7, the{" "}
        <span className="underline-yellow z-10">
          possibility of malfunction are very low.
        </span>
      </PageIntro>

      <div>
        <p className="text-sm opacity-70 leading-6 mb-4">
          Donut candy shortbread toffee dragée apple pie brownie. Muffin
          chocolate halvah bonbon gummies cake apple pie. Croissant dessert
          candy canes chocolate bar topping jujubes cupcake toffee dragée.
          Fruitcake danish tart gummies tootsie roll dragée cheesecake jujubes.
          Fruitcake powder marzipan dessert dessert oat cake candy. Sweet roll
          sweet roll gummi bears tootsie roll dragée. Candy canes brownie danish
          pudding jelly gummies.
        </p>
        <ul className="text-sm opacity-70 leading-6 ">
          <li className="flex gap-2">
            <Image src={checkmark} width={12} />
            Danish lemon drops sweet soufflé jelly-o wafer gingerbread muffin.
          </li>
          <li className="flex gap-2">
            <Image src={checkmark} width={12} />
            Marshmallow caramels chocolate jelly-o sweet roll jelly beans cake
            sweet.{" "}
          </li>
          <li className="flex gap-2">
            <Image src={checkmark} width={12} />
            Donut pastry apple pie ice cream dragée cheesecake.{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ServicesText