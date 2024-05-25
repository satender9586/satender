import React from "react";
import { Box, Typography } from "@mui/material";
import Layout from "../../Layout/Layout";
import Banner from "./Banner";
import Content from "./Content";

const Refund = () => {
  const data = {
    title: "Refund Policy",
    desc: "Please read this agreement carefully, as it contains important information regarding your legal rights and remedies.",
  };
  return (
    <Layout>
      <Banner data={data} />
      <Content>
        <Box>
          <Box mt={"1rem"}>
            <Box>
              <Typography
                color={"#2f1c6a"}
                sx={{ fontWeight: 600, fontSize: "20px" }}
              >
                REFUND POLICY
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: "15px", mt: "0.3rem" }}
                color={"#2F1C6A"}
                lineHeight={"25px"}
                letterSpacing={1}
              >
                Products purchased from Cloudedata may be refunded only if
                canceled within 30 days of the date of the transaction. Note:
                Due to their nature, cryptocurrencies, tokens and digital assets
                are generally irreversible and their exchange rates are highly
                volatile and transitory. We can not be responsible for any risk
                including but not limited to exchange rate risk and market risk.
                Products purchased using cryptocurrencies, tokens or digital
                assets will not be refunded. Note: If a client's actions are
                found to violate applicable laws or Cloudedata 's Terms of
                Services, any payments made to Cloudedata will not be refunded.
                “Date of the transaction,” for the purpose of this Refund
                Policy, means the date of purchase of any product or service,
                which includes the date any renewal is processed by Cloudedata
                in accordance with the terms and conditions of the applicable
                product or service agreement . You may cancel a product at any
                time, but a refund will only be issued if cancellation is
                requested within the refund timeframe specified for the
                applicable product, if available at all. Note: Some products
                have different policies or requirements for a refund associated
                with them, including some products that are not eligible for a
                refund under any circumstance. Please see below for refund terms
                applicable to such products:
              </Typography>
            </Box>
          </Box>
          <Box mt={"1rem"}>
            <Box>
              <Typography
                color={"#2f1c6a"}
                sx={{ fontWeight: 600, fontSize: "20px" }}
              >
                PRODUCTS AVAILABLE FOR REFUND UNDER STANDARD TERMS
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: "15px", mt: "0.3rem" }}
                color={"#2F1C6A"}
                lineHeight={"25px"}
                letterSpacing={1}
              >
                <ul>
                  <li>
                    Hosting (all plans, except first payment after Free Trial)
                  </li>

                  <li>Daily Backups</li>

                  <li>Cloude Data Email</li>
                  <li>Titan Email</li>
                  <li>Priority Support</li>
                  <li>NordVPN 6 and 12-month plans</li>
                  <li> VPN 6 and 12-month plans</li>
                  <li>KVM VPS (except upgrades)</li>
                  <li> Kubernetes</li>
                </ul>
              </Typography>
            </Box>
          </Box>
          <Box mt={"1rem"}>
            <Box>
              <Typography
                color={"#2f1c6a"}
                sx={{ fontWeight: 600, fontSize: "20px" }}
              >
                PRODUCTS NOT AVAILABLE FOR REFUNDS
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: "15px", mt: "0.3rem" }}
                color={"#2F1C6A"}
                lineHeight={"25px"}
                letterSpacing={1}
              >
                <ul>
                  <li>Redemption Fees</li>

                  <li>VPS License</li>
                  <li>Upgrades for Minecraft (Game Panel) VPS</li>
                  <li>Upgrades for KVM VPS</li>
                  <li>Kubernetes</li>
                  <li>
                    Any products or services that were suspended, canceled, or
                    terminated due to the abusive usage of the products,
                    services, or any other violation of the Terms and Conditions
                    are not eligible for a refund. The purpose of the refund is
                    for customers to try and understand whether the services
                    provided by Cloudedata suit their needs. In any way,
                    Cloudedata will not tolerate abusive usage of refunds (i.e.,
                    refunding the same services multiple times and (or)
                    repetitively purchasing and asking for a refund for services
                    purchased in bulk, etc.). Cloudedata remains a right to
                    unilaterally decline the request for a refund if any of the
                    signs related to the abusage of the refunds occur.
                  </li>
                </ul>
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: "20px", mt: "0.3rem", fontWeight: 600 }}
                color={"#2F1C6A"}
                lineHeight={"25px"}
                letterSpacing={1}
              >
                PAYMENT METHODS WITH SPECIAL REFUND TERMS:
              </Typography>
              <Typography
                sx={{ fontSize: "15px", mt: "0.3rem" }}
                color={"#2F1C6A"}
                lineHeight={"25px"}
                letterSpacing={1}
              >
                Please note that all payment processors have different policies
                and requirements for refunds and there are some payment methods
                that are not eligible for a refund under any circumstance.
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: "20px", mt: "0.3rem", fontWeight: 600 }}
                color={"#2F1C6A"}
                lineHeight={"25px"}
                letterSpacing={1}
              >
                REFUNDS TO BALANCE
              </Typography>
              <Typography
                sx={{ fontSize: "15px", mt: "0.3rem" }}
                color={"#2F1C6A"}
                lineHeight={"25px"}
                letterSpacing={1}
              >
                We provide refunds to the original funding source. that once a
                refund from Cloudedata is initiated for a selected invoice, it
                becomes irrevocable and cannot be refunded to a different
                source.
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: "20px", mt: "0.3rem", fontWeight: 600 }}
                color={"#2F1C6A"}
                lineHeight={"25px"}
                letterSpacing={1}
              >
                REFUNDS FROM BALANCE
              </Typography>
              <Typography
                sx={{ fontSize: "15px", mt: "0.3rem" }}
                color={"#2F1C6A"}
                lineHeight={"25px"}
                letterSpacing={1}
              >
                Over-funded balance can be refunded within 30 days of the
                payment that resulted in the over-funding. In special cases,
                other payments can be refunded instead of the original payment
                if the 30-day time-frame can be applied to those payments
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: "20px", mt: "0.3rem", fontWeight: 600 }}
                color={"#2F1C6A"}
                lineHeight={"25px"}
                letterSpacing={1}
              >
                CHARGEBACKS
              </Typography>
              <Typography
                sx={{ fontSize: "15px", mt: "0.3rem" }}
                color={"#2F1C6A"}
                lineHeight={"25px"}
                letterSpacing={1}
              >
                If at any time, we record a decline, chargeback, reversal,
                payment dispute, risk of payment fraud or other rejection of a
                charge of any payable fees on your Cloudedata account
                (“Chargeback”), this will be considered as a breach of your
                payment obligations hereunder, therefore you agree that
                Cloudedata may pursue all available lawful remedies in order to
                obtain payment, including but not limited to, immediate
                termination, without notice to you, of your Cloudedata account
                and any domain names or Cloudedata services registered or
                renewed on your behalf (“Services”). In addition, this will also
                result in disabling the option to checkout with a credit card
                for your Cloudedata account to limit the risk of payment fraud.
                In the event a Chargeback is performed, your Cloudedata account
                may be blocked without the option to re-purchase or re-use it,
                and any data contained in such a Cloudedata account, including
                any certain content, features, or capacity of your Cloudedata
                account may be subject to cancellation and loss of data. Your
                use of the Cloudedata Services and the ability to checkout using
                credit card will not resume until you: verify the payment method
                used for the disputed transaction, either by providing: proof of
                the payment; or a simple censored photo of the credit card, with
                uncovered first 6 (six) and last 4 (four) digits. pay any
                applicable fees in full, including any fees and expenses
                incurred by Cloudedata and/or any third party services for each
                Chargeback received (including fees for Cloudedata Services
                provided prior to the Chargeback, handling and processing
                charges and fees incurred by the payment processor). Cases
                related to criminal fraud chargebacks or obvious payment fraud
                (i.e. cases where compromised credit card details were used to
                make purchases) will result in permanent service termination
                without any option to recover. If you have any questions or
                concerns regarding a payment made to Cloudedata, we encourage
                you to first contact our Customer Support team before filing a
                Chargeback or reversal of payment, in order to prevent the
                Cloudedata Services from being cancelled and your Cloudedata
                account being blocked, and to avoid the filing of an unwarranted
                or erroneous Chargeback, which may result in your being liable
                for its applicable fees, in addition to re-payment of all the
                fees applicable to the Cloudedata Services purchased (and
                charged-back) by you. We reserve our right to dispute any
                Chargeback received, including by providing the relevant credit
                card company or financial institution with any information and
                documentation proving that the User responsible for such
                Chargeback did in fact authorize the transaction and make use of
                the Services rendered thereafter.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Content>
    </Layout>
  );
};

export default Refund;
