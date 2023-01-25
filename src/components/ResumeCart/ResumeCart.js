import { ContainerResumeCart, Box1, Box2, Box3, Box4, BtnTotal} from './style'

const ResumeCart = () => {
  return (
    <ContainerResumeCart>
      <h1>Resumo do Pedido</h1>
      <Box1>
        <h2>Produtos - 1 item</h2>
        <p>R$ 26,90</p>
      </Box1>
      <Box2>
        <h2>Frete</h2>
        <p>R$ 0,00</p>
      </Box2>
      <Box3>
        <h2>Desconto</h2>
        <p>R$ 0,00</p>
      </Box3>
      <hr></hr>
      <Box4>
        <h2>Total</h2>
        <p>R$ 26,90</p>
      </Box4>
      <BtnTotal>Finalizar Compra</BtnTotal>
    </ContainerResumeCart>
  );
};

export default ResumeCart;


