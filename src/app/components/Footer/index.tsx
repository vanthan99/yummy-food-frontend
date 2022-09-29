/**
 *
 * Footer
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Col, Row } from 'antd';
import { reponsiveConfigs } from 'styles/common-styles';

interface Props {}

export const Footer = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <FooterWrapper>
      <Row justify="center">
        <Col {...reponsiveConfigs}>This is header</Col>
      </Row>
    </FooterWrapper>
  );
});

const FooterWrapper = styled.div``;
