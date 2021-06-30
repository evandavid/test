import React from 'react';
import Modal from '#components/misc/Modal';
import { modals } from '#constants/index';
import CorporateGovernanceLinks from './CorporateGovernanceLinks';

const CorporateGovernanceModal = ({ title, links }) => (
  <Modal className="footer-modal" modalId={modals.CORPORATE_GOVERNANCE}>
    <h1 className="footer-modal__corporate-governance-title">{title}</h1>
    <CorporateGovernanceLinks links={links} />
  </Modal>
);

export default CorporateGovernanceModal;
