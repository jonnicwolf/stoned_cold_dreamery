import React from 'react';
import styled from 'styled-components';

const FAQS = () => {
  return (
    <Container>
      <FAQGroup>
        <FAQGroupTitle>FAQS</FAQGroupTitle>
        <AnchorContainer>
          <Anchor href='#1'>Returns & Refunds</Anchor>
          <Anchor href='#2'>Shipping Policy</Anchor>
          <Anchor href='#3'>Modifying Orders</Anchor>
          <Anchor href='#4'>Payment Methods</Anchor>
          <Anchor href='#5'>Products</Anchor>
          <Anchor href='#6'>Retail Partnership</Anchor>
          <Anchor href='#7'>Unsubscribe</Anchor>
        </AnchorContainer>
      </FAQGroup>

      <Content>
        <FAQ id='1'>
          <Title>RETURNS & REFUNDS</Title>
          <LineBreak/>
          <FAQTitle>What is your return and refund policy?</FAQTitle>
          <Policy>
            We accept returns within 30 days of when they’re delivered. To be returned an item must be unused and unopened, and definitely not ashed in.
            <br />
            <br />
            Returns, cancellations and exchanges are not accepted on the following:
            <ul>
              <li>Accessories (matches, rolling papers, etc)</li>
              <li>Products marked Limited Edition (eg: Pineapple Express) and/or Final Sale</li>
              <li>3 or more of the same item</li>
            </ul>
            <p>
              To return something, please email us first at hello@houseplant.com to get started. You are responsible for all shipping and handling charges on returned items unless otherwise specified or you hand-deliver them back to Houseplant. We’ll get you your refund as soon as the warehouse receives and verifies the product.
              <br/>
              <br/>
              If you were charged but didn’t get your order, or there is any kind of issue with your order, please email us at stonedcolddreamery@gmail.com.
            </p>
          </Policy>
        </FAQ>

        <FAQ id='2'>
          <Title>SHIPPING Policy</Title>
          <LineBreak />
          <FAQTitle>When will my order ship?</FAQTitle>
          <Policy>
            The short answer is: as soon as possible. 
            <br />
            <br />
            The medium-length answer is: our current warehouse processing time is 5 business days, which means non-weekend and non-holiday days. It’s generally speaking the longest it will take us to carefully pack and ship your order. Once your order ships, we’ll email you tracking information.
            <br />
            <br />
            You can also shoot us an email with your order number at hello@houseplant.com and we can help.
            <br />
            <br />
          </Policy>

          <FAQTitle>Where does the Stoned Cold Dreamery ship?</FAQTitle>
          <Policy>
            We ship domestically within the US (including AK and HI, excluding Puerto Rico). Stoned Cold Dreamery does not ship to P.O. Boxes or outside the US. Not even if you write it out as “Post Office Box.”
            <br />
            <br />
          </Policy>
          <FAQTitle>How much does shipping cost?</FAQTitle>
          <Policy>
            Domestic and expedited shipping options are available and we’ll let you know how much they cost once we know what you’re ordering and where you live and all that stuff.
            <ul>
              <li>
                Domestic shipping (including AK and HI, excluding Puerto Rico): takes an estimated 2-6 business days, depending on where you live and weather and all that good stuff. 
              </li>
              <li>
                Expedited shipping (including AK and HI, excluding Puerto Rico) takes an estimated 2-3 business days, depending on roughly the same things.
              </li>
            </ul>
            Special Handling Items: Additional fees may apply to heavy items or items that require special handling as noted on product pages.
            <br />
            <br />
          </Policy>
          <FAQTitle>What if my product arrived broken?</FAQTitle>
          <Policy>
            There’s nothing worse than being excited that the new thing you bought is about to show up only to have it show up broken.
            <br />
            <br />
            Send your order number along with photos of the product and original packaging/packing materials to hello@houseplant.com within the first three days of your delivery and we’ll look into it ASAP.
            <br />
            <br />
          </Policy>
        </FAQ>

        <FAQ id='3'>
          <Title>MODIFYING ORDERS</Title>
          <LineBreak />
          <FAQTitle>Can I change or cancel my order?</FAQTitle>
          <Policy>
            We try to get you your order as fast as we can, which means that if you want to change or cancel your order, email us at stonedcolddreamery@gmail.com as soon as you can, otherwise it might already be on its way. If it’s not already headed your way, we’ll do whatever we can to help.
            <br />
            <br />
          </Policy>
          <FAQTitle>I entered the wrong address, can I fix it?</FAQTitle>
          <Policy>
            If you need to change or cancel your order, send us a note at stonedcolddreamery@gmail.com and we’ll do our best to help. That said, our warehouse moves fast. The forklifts are probably flying around there right now. So the sooner you let us know, the better chance there is we can fix it.
            <br />
            <br />
          </Policy>
        </FAQ>

        <FAQ id='4'>
          <Title>PAYMENT METHODS</Title>
          <LineBreak />
          <FAQTitle>What payment methods do you accept?</FAQTitle>
          <Policy>
            We accept all major credit cards, PayPal, AfterPay and ShopPay. We do not accept black duffel bags of cash left outside. Not after the last time…
            <br />
            <br />
          </Policy>
          <FAQTitle>Do you sell gift  cards?</FAQTitle>
          <Policy>
            No! Not yet at least. We're working on it!
            <br />
            <br />
          </Policy>
        </FAQ>

        <FAQ id='5'>
          <Title>PRODUCTS</Title>
          <LineBreak />
          <FAQTitle>Where are your products made?</FAQTitle>
          <Policy>
            Our products are designed in the Puerto Rico, Guyana, Fezz and Darien's back smoke room, lots of other places and these free and United States of America. They’re made in China, Taiwan and the Czech Republic using only responsibly sourced materials.
            <br />
            <br />
          </Policy>
          <FAQTitle>The stuff i want is out of stock. What now?!</FAQTitle>
          <Policy>
            Chill dawgs, our usual restock time for any product is  about a week. If the item isn’t in stock within that time frame, we will let you guys know via our newsletter.
            <br />
            <br />
          </Policy>
          <FAQTitle>What do I do with the empty packaging?</FAQTitle>
          <Policy>
            Our packaging is made of recycled materials. You can also recycle the packaging the old-fashioned way by using them to store stuff, or package something else.
            <br />
            <br />
            We also use biodegradable packing peanuts that are non-toxic and dissolve in water. Run them under your faucet to break them down. Or put them in the bath with you if you are one of those “bath” people.
            <br />
            <br />
          </Policy>
        </FAQ>

        <FAQ id='6'>
          <Title>RETAIL PARTNERSHIP</Title>
          <LineBreak />
          <FAQTitle>Can I sell your products in my store?</FAQTitle>
          <Policy>
            We’re slowly adding to our list of select retail partners. And while we put the word “slowly” in there, we are always looking for interesting companies and people to partner with. Send your information to hello@houseplant.com if you’d like to know more.
            <br />
            <br />
          </Policy>
        </FAQ>

        <FAQ id='7'>
          <Title>UNSUBSCRIBE</Title>
          <LineBreak />
          <FAQTitle>How do I unsubscribe from Stoned Cold Dreamery emails</FAQTitle>
          <Policy>
            You can always click “unsubscribe” within the footer of our emails. Or you can change your email, although that seems pretty extreme.
            <br />
            <br />
          </Policy>
        </FAQ>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 5vh;
  color: #104e65;
  display: flex;
  justify-content: space-between;
  padding: 5vw;
  gap: 5vw;
`;

const FAQGroup = styled.div`
  width: 25%;
  position: fixed;
  left: 5vw;
  top: 0;
  margin-top: 10vh;
`;
const Content = styled.div`
  width: 75%;
  padding-left: 25%;
  display: flex;
  flex-direction: column;
  gap: 3vw;
`;

const Title = styled.h1`
  font-family: Bebas Neue;
  font-weight: bold;
  font-size: 5vw;
  margin: 20px 0 10px 0;
`;
const FAQGroupTitle = styled(Title)`
  font-size: 3vw;
`;
const LineBreak = styled.div`
  border-bottom: 1px solid #104e65;
`
const FAQ = styled.div`
  // border-bottom: 1px solid #104e65;
`;
const FAQTitle = styled.h3`
  font-weight: bold;
`;
const Policy = styled.div`
  line-height: 2.5vh;
  border-bottom: 1px solid #104e65;
`;
const AnchorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8vh;
  `;
  const Anchor = styled.a`
  text-decoration: none;
  color: #104e65;
`;

export default FAQS;
