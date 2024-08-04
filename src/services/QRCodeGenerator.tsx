import React, { useState } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import qs from 'qs';

interface PaymentFormProps {
  amount: number;
  bankCode: string;
  orderDescription: string;
  orderType: string;
  language: string;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ amount, bankCode, orderDescription, orderType }) => {
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

  const createPaymentUrl = async () => {
    const date = new Date();
    const createDate = date.toISOString().replace(/[-:.TZ]/g, '').substring(0, 14); // yyyyMMddHHmmss
    const orderId = date.toISOString().replace(/[-:.TZ]/g, '').substring(14, 20); // Random order ID

    const locale = 'vn';
    const currCode = 'VND';
    
    const ipAddr = await axios.get('https://api.ipify.org?format=json').then(response => response.data.ip);

    const vnp_Params: any = {
      vnp_Version: '2.1.0',
      vnp_Command: 'pay',
      vnp_TmnCode: '47EDXU4Q',
      vnp_Locale: locale,
      vnp_CurrCode: currCode,
      vnp_TxnRef: orderId,
      vnp_OrderInfo: orderDescription,
      vnp_OrderType: orderType,
      vnp_Amount: amount * 100,
      vnp_ReturnUrl: '/',
      vnp_IpAddr: ipAddr,
      vnp_CreateDate: createDate,
    };

    if (bankCode) {
      vnp_Params['vnp_BankCode'] = bankCode;
    }

    // Sắp xếp tham số theo thứ tự từ điển và tạo chuỗi query string
    const sortedParams = Object.keys(vnp_Params).sort().reduce((result, key) => {
      result[key] = vnp_Params[key];
      return result;
    }, {} as any);

    const signData = qs.stringify(sortedParams, { encode: false });
    console.log('Sign Data:', signData); // Debugging: In ra chuỗi query string

    const secretKey = 'GCU93JRFE57RRUQV8PW7VTSYSPLFD8EA';
    const signed = CryptoJS.HmacSHA512(signData, secretKey).toString(CryptoJS.enc.Hex);
    sortedParams['vnp_SecureHash'] = signed;

    console.log('Signature:', signed); // Debugging: In ra chữ ký

    const vnpUrl = 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html' + '?' + qs.stringify(sortedParams, { encode: false });

    setRedirectUrl(vnpUrl);
  };

  if (redirectUrl) {
    window.location.href = redirectUrl;
  }

  return (
    <div>
      <button onClick={createPaymentUrl}>Create Payment URL</button>
    </div>
  );
};

export default PaymentForm;
