# Estrutura Completa do Site Loberiam Shop

## Páginas Principais

### 1. Home (index.html)
- Banner rotativo com 3-5 promoções principais
- Categorias em destaque com imagens
- Produtos em oferta
- Novidades/Lançamentos
- Benefícios da loja (frete grátis, pagamento seguro, etc.)
- Newsletter
- Produtos mais vendidos

### 2. Categorias (categorias.html)
- Listagem de todas as categorias
- Subcategorias organizadas
- Filtros de navegação
- Breadcrumbs

### 3. Categoria Específica (categoria-[nome].html)
- Listagem de produtos da categoria
- Filtros (preço, avaliação, marca, etc.)
- Ordenação (mais vendidos, menor preço, etc.)
- Paginação
- Breadcrumbs

### 4. Produto (produto.html)
- Galeria de imagens do produto
- Informações detalhadas
- Especificações técnicas
- Avaliações e comentários
- Produtos relacionados
- Botão de compra e adicionar ao carrinho
- Compartilhamento em redes sociais
- Breadcrumbs

### 5. Carrinho (carrinho.html)
- Lista de produtos adicionados
- Resumo de valores
- Cálculo de frete
- Cupom de desconto
- Botões para continuar comprando ou finalizar compra

### 6. Checkout (checkout.html)
- Formulário de endereço
- Opções de entrega
- Opções de pagamento
- Resumo do pedido
- Política de privacidade e termos

### 7. Minha Conta (minha-conta.html)
- Login/Cadastro
- Dashboard do cliente
- Meus pedidos
- Meus endereços
- Meus cartões
- Meus favoritos
- Alterar senha
- Preferências de comunicação

### 8. Quem Somos (quem-somos.html)
- História da empresa
- Missão, visão e valores
- Equipe
- Diferenciais
- Números e conquistas

### 9. Contato (contato.html)
- Formulário de contato
- Informações de contato (telefone, email, etc.)
- Mapa de localização
- FAQ rápido
- Horário de atendimento

### 10. Blog (blog.html)
- Listagem de artigos
- Categorias de conteúdo
- Busca de artigos
- Artigos em destaque

### 11. Artigo do Blog (artigo.html)
- Conteúdo completo do artigo
- Imagens ilustrativas
- Compartilhamento em redes sociais
- Artigos relacionados
- Comentários

## Páginas de Políticas

### 12. Termos e Condições (politicas/termos-condicoes.html)
- Texto completo dos termos
- Navegação lateral entre políticas
- Data de atualização

### 13. Política de Privacidade (politicas/privacidade.html)
- Texto completo da política
- Navegação lateral entre políticas
- Data de atualização

### 14. Trocas e Devoluções (politicas/trocas-devolucoes.html)
- Política detalhada
- Processo passo a passo
- Perguntas frequentes
- Formulário de solicitação

### 15. Política de Frete (politicas/frete.html)
- Informações sobre entregas
- Prazos por região
- Custos
- Rastreamento

### 16. Formas de Pagamento (politicas/formas-pagamento.html)
- Opções disponíveis
- Parcelamento
- Segurança

## Páginas de Suporte

### 17. Central de Ajuda (suporte/central-ajuda.html)
- Categorias de dúvidas
- Artigos de ajuda
- Busca de tópicos

### 18. Dúvidas Frequentes (suporte/duvidas-frequentes.html)
- Perguntas organizadas por categoria
- Sistema de expansão/colapso
- Busca de perguntas

### 19. Acompanhe seu Pedido (suporte/acompanhe-pedido.html)
- Formulário de rastreamento
- Explicação dos status
- Contato para problemas

### 20. Trabalhe Conosco (trabalhe-conosco.html)
- Vagas disponíveis
- Benefícios
- Formulário de candidatura
- Cultura da empresa

## Recursos Especiais

### 21. Busca Avançada (busca.html)
- Filtros detalhados
- Sugestões de busca
- Histórico de busca
- Resultados organizados por relevância

### 22. Ofertas Especiais (ofertas.html)
- Promoções ativas
- Contagem regressiva
- Filtros por categoria e desconto

### 23. Lançamentos (lancamentos.html)
- Novos produtos
- Pré-venda
- Filtros por categoria

### 24. Mais Vendidos (mais-vendidos.html)
- Produtos populares
- Filtros por categoria
- Avaliações em destaque

## Componentes Globais

### Cabeçalho
- Logo
- Menu de categorias
- Busca
- Minha conta
- Favoritos
- Carrinho
- Menu mobile

### Rodapé
- Links institucionais
- Links de suporte
- Categorias principais
- Formas de pagamento
- Redes sociais
- Newsletter
- Certificados de segurança
- Copyright

### Banner Rotativo (Carousel)
- 3-5 banners promocionais
- Navegação por setas e indicadores
- Autoplay com pausa ao hover
- Responsivo para todos os dispositivos

### Minicart
- Visualização rápida dos itens no carrinho
- Remover itens
- Valor total
- Botão para finalizar compra

## Requisitos de Imagens para Assets

### Banners
- Banner principal rotativo (desktop: 1920x600px, mobile: 768x400px) - 5 imagens
- Banners de categoria (800x400px) - 6 imagens
- Banners de promoção (1200x300px) - 3 imagens

### Produtos
- Imagens principais (800x800px) - 20 imagens
- Imagens secundárias/detalhes (800x800px) - 60 imagens
- Miniaturas (200x200px) - 80 imagens

### Categorias
- Ícones de categoria (200x200px) - 6 imagens
- Imagens de fundo de categoria (600x300px) - 6 imagens

### Interface
- Logo (versão principal, versão reduzida, favicon)
- Ícones de interface (carrinho, usuário, busca, etc.)
- Ícones de benefícios (frete, pagamento, troca, etc.)
- Ícones de redes sociais
- Ícones de bandeiras de cartão
- Certificados e selos de segurança

### Conteúdo
- Imagens para "Quem Somos" (equipe, empresa, etc.)
- Imagens para Blog (pelo menos 5 artigos)
- Imagens institucionais (ambiente de trabalho, loja, etc.)

## Funcionalidades JavaScript

- Carousel/Banner rotativo na home
- Filtros dinâmicos de produtos
- Minicart com atualização via AJAX
- Formulários com validação
- Galeria de imagens de produto com zoom
- Sistema de avaliação de produtos
- Cálculo de frete no carrinho
- Máscaras para campos de formulário
- Menu mobile responsivo
- Botão "Voltar ao topo"
- Notificações de sistema (sucesso, erro, etc.)
- Contador regressivo para ofertas especiais
