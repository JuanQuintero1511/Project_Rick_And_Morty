import Card from './Card';

function Cards({ characters, onClose }) {
   return (
      <div>
         {characters.map (( {name, species, gender, image, status, origin, id }) => {
            return (
            <Card
               key = {id}
               id={id}
               name={name}
               status={status} 
               species={species}
               gender={gender}
               origin={origin.name}
               image={image}
               onClose={onClose}
            />
         );
       })}
      </div>
   );
}
export default Cards;