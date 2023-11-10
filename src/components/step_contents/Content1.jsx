import React, { useState } from "react";
import { Button, DatePicker, Form, Input } from "antd";
import { Select } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import "./Contents.css";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const Content1 = () => {
  // upload config
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? (
        <LoadingOutlined />
      ) : (
        <PlusOutlined style={{ fontSize: 25 }} />
      )}
    </div>
  );

  return (
    <div className="px-6">
      <h3 className="text-[30px] py-6">Ariza Yuborish</h3>
      <Form
        className="flex flex-col text-md"
        //   onFinish={onSubmit}
        autoComplete="on"
      >
        <div className="flex items-center gap-6">
          <Form.Item
            name="familiya"
            className="w-full"
            rules={[
              {
                required: true,
                message: "Iltimos familiyangizni kiriting!",
              },
            ]}
          >
            <Input
              placeholder="Familiya"
              className="md:p-2 border-orange-300 hover:border-orange-400 border-2 focus:border-orange-500"
            />
          </Form.Item>
          <Form.Item
            name="ism"
            className="w-full"
            rules={[
              {
                required: true,
                message: "Iltimos ismingizni kiriting!",
              },
            ]}
          >
            <Input
              placeholder="Ism"
              className="md:p-2 border-orange-300 hover:border-orange-400 border-2 focus:border-orange-500"
            />
          </Form.Item>
          <Form.Item
            name="otasining_ismi"
            className="w-full"
            rules={[
              {
                required: true,
                message: "Iltimos Otangizni ismini kiriting!",
              },
            ]}
          >
            <Input
              placeholder="Otasining ismi"
              className="md:p-2 border-orange-300 hover:border-orange-400 border-2 focus:border-orange-500"
            />
          </Form.Item>
        </div>

        <div className="flex items-center gap-6">
          <Form.Item
            name="date_of_birth"
            className="w-full"
            rules={[
              {
                required: true,
                message: "Iltimos tug'ilgan kuningizni kiriting!",
              },
            ]}
          >
            <DatePicker
              placeholder="Tug'ilgan kun:2002-11-13"
              className="md:p-2 w-full border-orange-300 hover:border-orange-400 border-2 focus:border-orange-500"
            />
          </Form.Item>
          <Form.Item
            name="passport_number"
            className="w-full"
            rules={[
              {
                required: true,
                message: "Iltimos Passport raqamingizni kiriting!",
              },
            ]}
          >
            <Input
              placeholder="Passport raqam"
              className="md:p-2 border-orange-300 hover:border-orange-400 border-2 focus:border-orange-500"
            />
          </Form.Item>
          <Select
            defaultValue="Fakultet"
            className="w-full custom-select"
            options={[
              {
                value: "Telecom",
                label: "Telecom",
              },
              {
                value: "Software Engineering",
                label: "Software Engineering",
              },
              {
                value: "Cyber Security",
                label: "Cyber Security",
              },
              {
                value: "Radio communications",
                label: "Radio communications",
              },
            ]}
          />
        </div>

        <div className="flex items-center text-lg justify-between text-center">
          <div>
            <h3>Ariza Nusxasi</h3>
            <Upload
              name="avatar"
              listType="picture-circle"
              className="avatar-uploader"
              showUploadList={false}
              // action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: "100%",
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
          </div>
          <div>
            <h3>Passport nusxasi</h3>
            <Upload
              name="avatar"
              listType="picture-circle"
              className="avatar-uploader"
              showUploadList={false}
              // action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: "100%",
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
          </div>
          <div>
            <h3>Rasmi</h3>
            <Upload
              name="avatar"
              listType="picture-circle"
              className="avatar-uploader"
              showUploadList={false}
              // action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: "100%",
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
          </div>
        </div>

        <div className="flex items-center text-lg justify-between text-center">
          <div>
            <h3>Diplom Nusxasi</h3>
            <Upload
              name="avatar"
              listType="picture-circle"
              className="avatar-uploader"
              showUploadList={false}
              // action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: "100%",
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
          </div>
          <div>
            <h3>Diplom ilova nusxasi</h3>
            <Upload
              name="avatar"
              listType="picture-circle"
              className="avatar-uploader"
              showUploadList={false}
              // action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: "100%",
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
          </div>
          <div>
            <h3>Sertfikatlar</h3>
            <Upload
              name="avatar"
              listType="picture-circle"
              className="avatar-uploader"
              showUploadList={false}
              // action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: "100%",
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Content1;
