import PropTypes from 'prop-types';// para definir el tipo a las props



export const FirstApp = ({title,subTitle, name}) => {


  //  console.log(props);

  
  return (
    <>
    <h1 data-testid='test-title'>{title}</h1>{/**no se pueden imprimir booleanos */}
    <h2>{subTitle}</h2>
    <p>{name}</p>
    </>
  )
}


FirstApp.propTypes={// esto es para decirle a los programadores que tipo de dato debe mandar en la prop
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}

FirstApp.defaultProps={
  title: 'No hay titulo',
  subTitle: 'No hay subtitulo',
  name: 'Fernando Herrera'
}