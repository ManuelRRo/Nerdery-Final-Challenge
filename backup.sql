--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4 (Debian 17.4-1.pgdg120+2)
-- Dumped by pg_dump version 17.4 (Debian 17.4-1.pgdg120+2)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS '';


--
-- Name: Size; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."Size" AS ENUM (
    'NONE',
    'SMALL',
    'MEDIUM',
    'LARGE',
    'X_LARGE',
    'XX_LARGE',
    'S4YEARS_XS'
);


ALTER TYPE public."Size" OWNER TO postgres;

--
-- Name: TextColor; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."TextColor" AS ENUM (
    'NONE',
    'GREEN',
    'BLUE',
    'YELLOW',
    'PINK',
    'SKY_BLUE',
    'BROWN',
    'BLACK',
    'WHITE',
    'ORANGE',
    'PURPLE'
);


ALTER TYPE public."TextColor" OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Brands; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Brands" (
    id text NOT NULL,
    name text NOT NULL
);


ALTER TABLE public."Brands" OWNER TO postgres;

--
-- Name: CartDetails; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."CartDetails" (
    id text NOT NULL,
    quantity integer NOT NULL,
    price double precision NOT NULL,
    cart_id text NOT NULL,
    variant_id text NOT NULL
);


ALTER TABLE public."CartDetails" OWNER TO postgres;

--
-- Name: Carts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Carts" (
    id text NOT NULL,
    user_id text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Carts" OWNER TO postgres;

--
-- Name: Categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Categories" (
    id text NOT NULL,
    name text NOT NULL,
    "parentId" text,
    active boolean NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Categories" OWNER TO postgres;

--
-- Name: Files; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Files" (
    id text NOT NULL,
    key text NOT NULL,
    file_url text
);


ALTER TABLE public."Files" OWNER TO postgres;

--
-- Name: Likes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Likes" (
    "productId" text NOT NULL,
    user_id text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Likes" OWNER TO postgres;

--
-- Name: OrderDetails; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."OrderDetails" (
    id text NOT NULL,
    quantity integer NOT NULL,
    price double precision NOT NULL,
    "orderDetails_id" text NOT NULL,
    variant_id text NOT NULL
);


ALTER TABLE public."OrderDetails" OWNER TO postgres;

--
-- Name: Orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Orders" (
    id text NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    user_id text NOT NULL
);


ALTER TABLE public."Orders" OWNER TO postgres;

--
-- Name: Payments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Payments" (
    id text NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp(3) without time zone NOT NULL,
    status text NOT NULL,
    amount double precision NOT NULL,
    currency text NOT NULL,
    receipt_url text NOT NULL,
    payment_intent text NOT NULL,
    "orderId" text NOT NULL
);


ALTER TABLE public."Payments" OWNER TO postgres;

--
-- Name: ProductCategories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ProductCategories" (
    "productId" text NOT NULL,
    "categoryId" text NOT NULL
);


ALTER TABLE public."ProductCategories" OWNER TO postgres;

--
-- Name: Products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Products" (
    id text NOT NULL,
    name text NOT NULL,
    price double precision NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp(3) without time zone NOT NULL,
    brand_id text NOT NULL,
    active boolean DEFAULT true NOT NULL
);


ALTER TABLE public."Products" OWNER TO postgres;

--
-- Name: Roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Roles" (
    id text NOT NULL,
    name text NOT NULL
);


ALTER TABLE public."Roles" OWNER TO postgres;

--
-- Name: UserRoles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."UserRoles" (
    "userId" text NOT NULL,
    "roleId" text NOT NULL
);


ALTER TABLE public."UserRoles" OWNER TO postgres;

--
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    id text NOT NULL,
    nickname text NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- Name: Variants; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Variants" (
    id text NOT NULL,
    product_id text NOT NULL,
    file_id text NOT NULL,
    size public."Size" DEFAULT 'NONE'::public."Size" NOT NULL,
    "textColor" public."TextColor" DEFAULT 'NONE'::public."TextColor" NOT NULL,
    rgb text NOT NULL,
    stock integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Variants" OWNER TO postgres;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Data for Name: Brands; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Brands" (id, name) FROM stdin;
4610aadb-a1bb-461b-8be2-a0898b580d2f	Nike
e83a0e69-0b9a-4c79-a496-e3ce820118c6	Adidas
3b4695c0-a8be-4066-967a-3181ccd880b0	Puma
f614a1a4-be21-4a3f-88a7-6d8b641011ea	Under Armour
e539d3dc-f2f7-40bc-9d3f-7fbb09e16d8e	Reebok
9f4a69c9-3b7e-43ee-b54d-4447e9ac6cbb	apollo
0f5c8172-1b16-43c7-b47b-6d0111d307d1	apollo2
2e0e9f2e-909f-4cf3-831e-517d9e56e474	wachito
681b6291-6b25-4ae4-a9c5-19782f37ac00	Rebook
\.


--
-- Data for Name: CartDetails; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."CartDetails" (id, quantity, price, cart_id, variant_id) FROM stdin;
1b69afba-7da0-46a2-80a6-b84c961fc25e	1	1000	a29d8bad-fa15-4c07-883b-d9433245250d	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
d5f5da29-dee9-461f-a1f0-243004621d0e	1	1000	a29d8bad-fa15-4c07-883b-d9433245250d	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
467ffac1-d0de-4cde-a8cf-0ddd7bce1ee1	3	90	a29d8bad-fa15-4c07-883b-d9433245250d	00f1daad-7ed0-40a8-b443-183e92589ca6
\.


--
-- Data for Name: Carts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Carts" (id, user_id, "createdAt", "updatedAt") FROM stdin;
a29d8bad-fa15-4c07-883b-d9433245250d	9a026d8c-9264-4a2f-b8c0-fd58200d55b8	2025-05-26 00:36:57.002	2025-05-26 00:36:57.002
\.


--
-- Data for Name: Categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Categories" (id, name, "parentId", active, "createdAt", "updatedAt") FROM stdin;
e5e8a6b5-4abf-4f28-bc80-d034a2c765a0	Man	\N	t	2023-01-01 10:00:00	2023-01-01 10:00:00
33d3df10-790c-461b-927f-18de5372e3e7	T-Shirts	e5e8a6b5-4abf-4f28-bc80-d034a2c765a0	t	2023-01-01 10:00:00	2023-01-01 10:00:00
70743a51-e47d-49cd-a058-2ab9d9509329	Polo Shirts	e5e8a6b5-4abf-4f28-bc80-d034a2c765a0	t	2023-01-01 10:00:00	2023-01-01 10:00:00
f9e49e9c-7ee4-4993-afec-deb270606158	Long Sleeve	e5e8a6b5-4abf-4f28-bc80-d034a2c765a0	t	2023-01-01 10:00:00	2023-01-01 10:00:00
eb998388-ff57-480d-9d92-5283ab6c309e	Woman	\N	t	2023-01-01 10:00:00	2023-01-01 10:00:00
9ae13785-9b0d-4a7b-9c3a-0dac86488be5	Shirts	eb998388-ff57-480d-9d92-5283ab6c309e	t	2023-01-01 10:00:00	2023-01-01 10:00:00
\.


--
-- Data for Name: Files; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Files" (id, key, file_url) FROM stdin;
e6f5c7ba-a229-40fc-9845-11e6a12808e0	products/tshirt2.jpg	\N
85d23de9-9c1b-4519-8a69-29eccceb6f95	products/polo1.jpg	\N
02d3e5d8-f948-4af9-a0ea-dcf4a2793000	products/longsleeve1.jpg	\N
4fd7c1fa-2a2f-41b7-abd4-4de1b5784784	products/tshirt3.jpg	\N
38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	e4fcba29-a2f3-4f57-a873-1e256aba7db9	https://bucketshirtsimg.s3.us-east-2.amazonaws.com/e4fcba29-a2f3-4f57-a873-1e256aba7db9
\.


--
-- Data for Name: Likes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Likes" ("productId", user_id, "createdAt") FROM stdin;
a2c2fbfd-d43e-4f09-9ff2-b4c87c9b5811	05b8c6d3-d6e3-4778-9597-eddb7bc9f961	2025-06-01 05:55:19.357
7e72017d-4ebd-4a1e-9ed7-beab581735a8	65e07502-7e0b-4e7c-8f46-b98132a8ef22	2025-06-01 05:55:19.357
aaddabb6-d6c0-490f-9d04-8ff52d6fc1aa	05b8c6d3-d6e3-4778-9597-eddb7bc9f961	2025-06-01 05:55:19.357
287531d1-db63-411c-9351-5a66961b109c	c3e965ef-cf13-4b43-ac28-4ef0e662d186	2025-06-01 05:55:19.357
a2c2fbfd-d43e-4f09-9ff2-b4c87c9b5811	9a830c59-2229-4f41-8e0f-091abbd4ee4f	2025-06-01 05:55:19.357
ef79bdd1-2baf-47bf-9fd8-47ab4639980f	05b8c6d3-d6e3-4778-9597-eddb7bc9f961	2025-06-01 05:55:19.357
32fe760a-bc5e-4c4c-aa05-98340f8bdf54	05b8c6d3-d6e3-4778-9597-eddb7bc9f961	2025-06-01 05:55:19.357
16686134-d385-45bf-aa3a-a5ce3d7fae72	c3e965ef-cf13-4b43-ac28-4ef0e662d186	2025-06-01 20:37:54.285
\.


--
-- Data for Name: OrderDetails; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."OrderDetails" (id, quantity, price, "orderDetails_id", variant_id) FROM stdin;
f56eb95c-94c2-457c-94f7-e53d9788fb7e	1	1000	201c933f-23a7-41dd-b781-68faf28359f9	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
2a0fe6da-6335-447a-a6ac-d72d226a6f93	1	1000	201c933f-23a7-41dd-b781-68faf28359f9	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
c71f3182-faa1-4d04-a98f-3ee9f07d07ab	3	90	201c933f-23a7-41dd-b781-68faf28359f9	00f1daad-7ed0-40a8-b443-183e92589ca6
e3fd0eed-6592-4c50-8614-3f07c97404c9	1	1000	14fb24f4-46af-414c-9d4f-519d33484092	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
8ea37d44-ea1c-454b-9f52-954818752f98	1	1000	14fb24f4-46af-414c-9d4f-519d33484092	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
294e8e41-e077-4462-bdef-215d6d4abd51	3	90	14fb24f4-46af-414c-9d4f-519d33484092	00f1daad-7ed0-40a8-b443-183e92589ca6
c60b678a-49cb-40a8-b8f3-69c10b3fe02f	1	1000	6de9943f-e8c6-4a8c-97ba-18c88e78d5bd	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
3a87592f-01e1-4ebe-b263-3a2f29a213f0	1	1000	6de9943f-e8c6-4a8c-97ba-18c88e78d5bd	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
bc0895b8-1e26-4633-990e-30c6e8a25ac9	3	90	6de9943f-e8c6-4a8c-97ba-18c88e78d5bd	00f1daad-7ed0-40a8-b443-183e92589ca6
9d707d65-1093-41dc-b892-f423f6dcd32c	1	1000	dff2ccae-12dd-4b82-9c45-6f7730bc9ddf	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
8dee9549-166e-4b6f-a1cb-b6c16ffa895d	1	1000	dff2ccae-12dd-4b82-9c45-6f7730bc9ddf	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
79fca244-22df-435c-a3dc-166eec5ebcae	3	90	dff2ccae-12dd-4b82-9c45-6f7730bc9ddf	00f1daad-7ed0-40a8-b443-183e92589ca6
c584576b-aa67-4bdf-8b67-e04cd0c61844	1	1000	51664648-2a50-4621-99a1-5bde0c17f05b	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
266d057d-ad1c-4ef5-bc61-66204bdb9e4e	1	1000	51664648-2a50-4621-99a1-5bde0c17f05b	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
0078f47a-d22e-4907-94d6-2257cebdf9d6	3	90	51664648-2a50-4621-99a1-5bde0c17f05b	00f1daad-7ed0-40a8-b443-183e92589ca6
2e8a77c4-2f5d-48d0-bb95-782858552c69	1	1000	5da18a77-0a7c-4831-bbc5-f2b20dc16835	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
f066351b-b278-464e-b936-ee2b662e4034	1	1000	5da18a77-0a7c-4831-bbc5-f2b20dc16835	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
de23e86d-00af-457f-9ee4-195ff0e99bee	3	90	5da18a77-0a7c-4831-bbc5-f2b20dc16835	00f1daad-7ed0-40a8-b443-183e92589ca6
5b5d4a3c-4f99-4278-98b5-0ab45968bfe0	1	1000	0417dcba-46cc-4987-86f7-e67050effbc2	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
d0027204-1c79-4989-b965-6c1773fb9138	1	1000	0417dcba-46cc-4987-86f7-e67050effbc2	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
4e46180f-ae26-4b19-a2fe-a58492a1428b	3	90	0417dcba-46cc-4987-86f7-e67050effbc2	00f1daad-7ed0-40a8-b443-183e92589ca6
b1d454bf-7bd5-40a5-8a2d-4efb5e70ebb7	1	1000	8a5c86bc-25ad-434e-bb8a-dd93cc18c785	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
08b445e1-f6d9-4861-8f7f-e4360d62c13d	1	1000	8a5c86bc-25ad-434e-bb8a-dd93cc18c785	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
ad4f1ea9-bbbd-4caf-9255-71f1451f3ddb	3	90	8a5c86bc-25ad-434e-bb8a-dd93cc18c785	00f1daad-7ed0-40a8-b443-183e92589ca6
b77bd27f-7774-4e11-94f7-31fd42b85274	1	1000	27bafc18-f62f-4c59-9e01-082888759750	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
2e0c7d29-de1a-49eb-8d31-136761611d54	1	1000	27bafc18-f62f-4c59-9e01-082888759750	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
ad277534-fad5-4941-a86c-b269a011f0f6	3	90	27bafc18-f62f-4c59-9e01-082888759750	00f1daad-7ed0-40a8-b443-183e92589ca6
b28013c6-eda3-4e83-8424-5cf8bef04cee	1	1000	a0d34422-c49f-491a-8445-dd36f17d2ef1	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
9700fac9-ac5d-4f20-b475-3f20bd33c41e	1	1000	a0d34422-c49f-491a-8445-dd36f17d2ef1	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
03a93836-2937-4044-b275-96b354f3e11b	3	90	a0d34422-c49f-491a-8445-dd36f17d2ef1	00f1daad-7ed0-40a8-b443-183e92589ca6
742ff46a-59ce-4c2d-8bca-8e580c5c63be	1	1000	e8f2b64c-5409-491d-b244-b22700b49e75	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
e75f1258-8c8c-448e-89c8-4151d1588da5	1	1000	e8f2b64c-5409-491d-b244-b22700b49e75	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
2892c7b9-b437-4b15-abbb-ec0e267611ef	3	90	e8f2b64c-5409-491d-b244-b22700b49e75	00f1daad-7ed0-40a8-b443-183e92589ca6
04d3eddf-51de-424e-bb59-1778b1ac0458	1	1000	23372f19-bd3d-4f7f-b45d-ca6cd8777bd2	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
03858a2a-82cb-47f2-9e4a-75e15b287c21	1	1000	23372f19-bd3d-4f7f-b45d-ca6cd8777bd2	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
cb2d3ad7-9377-48b8-b88f-60420d78534b	3	90	23372f19-bd3d-4f7f-b45d-ca6cd8777bd2	00f1daad-7ed0-40a8-b443-183e92589ca6
3235152b-b799-42af-9ab1-334f3094e4bb	1	1000	16623e19-e486-4cd7-b3fc-d807613f8fdd	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
870de1c3-148a-4801-9841-8e3f00f194ea	1	1000	16623e19-e486-4cd7-b3fc-d807613f8fdd	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
271c2307-d513-4bae-bd7f-89067af30fae	3	90	16623e19-e486-4cd7-b3fc-d807613f8fdd	00f1daad-7ed0-40a8-b443-183e92589ca6
61016d9f-2520-4897-b399-ec0939e4cb00	1	1000	ee1a7bf1-1bf1-4a35-8100-aacdd1d529ed	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
d1e632f1-cc51-42ea-9b30-0ead1fb4ba6d	1	1000	ee1a7bf1-1bf1-4a35-8100-aacdd1d529ed	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
17585bae-b726-4673-a10e-1556434d5a0f	3	90	ee1a7bf1-1bf1-4a35-8100-aacdd1d529ed	00f1daad-7ed0-40a8-b443-183e92589ca6
f189951a-1419-49be-9a51-2e09674ded7f	1	1000	67f2250a-64dc-4209-a92f-a345b60e06ac	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
94546910-7c0e-4ebf-86f6-76e98bbcf256	1	1000	67f2250a-64dc-4209-a92f-a345b60e06ac	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
81aa629f-cdc4-4642-b374-acf01eae0250	3	90	67f2250a-64dc-4209-a92f-a345b60e06ac	00f1daad-7ed0-40a8-b443-183e92589ca6
75765865-9d29-4658-b39f-4c6231d2d3de	1	1000	351f8b9e-abe9-42be-8531-b2aade5b2d1e	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
ed7150cb-52f6-42fc-a0bf-3f866f2cbb9c	1	1000	351f8b9e-abe9-42be-8531-b2aade5b2d1e	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
c74fab5f-345e-4fe1-ab90-4d800ca36681	3	90	351f8b9e-abe9-42be-8531-b2aade5b2d1e	00f1daad-7ed0-40a8-b443-183e92589ca6
5f748154-a40d-4f47-9934-fdf3ecdb85e7	1	1000	dc33a536-ee33-4821-8ab3-65e59d551816	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
f5504fa1-c2dc-450b-b7b3-dee03fc812e8	1	1000	dc33a536-ee33-4821-8ab3-65e59d551816	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
db9d934b-737b-46e3-877c-6bf7f6c22bf2	3	90	dc33a536-ee33-4821-8ab3-65e59d551816	00f1daad-7ed0-40a8-b443-183e92589ca6
fa377e2d-2262-470d-858e-f606e2d05062	1	1000	1107ae51-dd8e-43e2-8dbd-de36a94c216f	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
0719c7b2-00c9-4743-8e59-017b3fca1599	1	1000	1107ae51-dd8e-43e2-8dbd-de36a94c216f	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
784bc385-5ee6-4ac5-a991-9cba5ad432b6	3	90	1107ae51-dd8e-43e2-8dbd-de36a94c216f	00f1daad-7ed0-40a8-b443-183e92589ca6
8bde40da-7ea4-4f3a-9aac-232e9f862388	1	1000	57925c9a-ef1e-4d7e-8b3a-82f24eba529d	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
a3ee2df6-8721-4242-b6c5-e67a8c51d7c9	1	1000	57925c9a-ef1e-4d7e-8b3a-82f24eba529d	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
66b34a53-7d18-42f1-b558-2e8cb212fd69	3	90	57925c9a-ef1e-4d7e-8b3a-82f24eba529d	00f1daad-7ed0-40a8-b443-183e92589ca6
00fc30fd-34cd-4eda-afb5-5521e4e07fdb	1	1000	e287071b-87bc-46c8-bb18-fe088ab7bb52	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
a5b78246-a362-47f5-930b-bd8b6c2fa149	1	1000	e287071b-87bc-46c8-bb18-fe088ab7bb52	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
1d7202d5-0b03-4c48-9357-aca724ef8662	3	90	e287071b-87bc-46c8-bb18-fe088ab7bb52	00f1daad-7ed0-40a8-b443-183e92589ca6
fffd35a3-bed5-4af9-9915-bef525c0c078	1	1000	be552f36-2428-4b13-b591-c8c585a0ee47	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
2178cd11-779c-4f08-af0d-711f17c55461	1	1000	be552f36-2428-4b13-b591-c8c585a0ee47	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
018899ba-44da-4d37-9324-1716365d3d4a	3	90	be552f36-2428-4b13-b591-c8c585a0ee47	00f1daad-7ed0-40a8-b443-183e92589ca6
5fb1194a-14c3-4384-93ef-07d0eadcbac0	1	1000	04416701-4774-4ea9-9b72-f75076dc750c	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
4446de61-226c-4bb2-b3e2-bd8d105c355c	1	1000	04416701-4774-4ea9-9b72-f75076dc750c	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
cbf5c6f7-0375-45bc-81dd-9e6ac7bda75d	3	90	04416701-4774-4ea9-9b72-f75076dc750c	00f1daad-7ed0-40a8-b443-183e92589ca6
df589d48-fedd-485e-b9e9-da78237d0f8b	1	1000	315ee53b-5fd3-4241-8645-c3bc472d5aaa	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
1551df1e-7dff-4544-9810-cbdb053b712c	1	1000	315ee53b-5fd3-4241-8645-c3bc472d5aaa	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
105fd8d3-65b8-4914-a1ef-eaae57e1fd53	3	90	315ee53b-5fd3-4241-8645-c3bc472d5aaa	00f1daad-7ed0-40a8-b443-183e92589ca6
cbed3a91-e982-4665-983d-01aa92e9e2b0	1	1000	e54e70b5-9607-431b-943c-ed02e9203ae4	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
25ed942c-0653-493a-a9b7-778c15ba0a93	1	1000	e54e70b5-9607-431b-943c-ed02e9203ae4	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
897a0444-32ff-42eb-97c4-55a78886db17	3	90	e54e70b5-9607-431b-943c-ed02e9203ae4	00f1daad-7ed0-40a8-b443-183e92589ca6
18bb264d-d140-48cf-9098-2dcb9bd0ef2d	1	1000	3aa18c1c-8f9c-40d3-a8f3-977474ff9a67	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
aab6e5f5-9559-4845-ab25-531f08720f9b	1	1000	3aa18c1c-8f9c-40d3-a8f3-977474ff9a67	9fe5a3eb-6ac5-4f50-889e-d7f527568f98
8cd5b438-9cec-4683-8389-80729f7ab6fd	3	90	3aa18c1c-8f9c-40d3-a8f3-977474ff9a67	00f1daad-7ed0-40a8-b443-183e92589ca6
\.


--
-- Data for Name: Orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Orders" (id, created_at, user_id) FROM stdin;
d5425d14-af10-4208-b7ab-703338dd7f50	2025-05-28 17:04:44.95	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
b258d6f3-220e-466b-8c99-ba744b244b18	2025-06-01 04:38:00.491	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
be5eda20-079b-41f3-81f2-65749f59e4f0	2025-06-01 04:38:34.408	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
a52f7aee-641a-4a37-af02-14664f264314	2025-06-01 04:41:48.767	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
d38a78cc-d7ef-46c7-bca3-9e52eee789a4	2025-06-01 04:47:54.519	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
cb5f648f-12bf-4ecf-8702-882fe37edc39	2025-06-01 16:26:05.242	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
dbb1d651-baa5-4e24-8318-76df2ad9b1b8	2025-06-01 16:36:55.77	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
201c933f-23a7-41dd-b781-68faf28359f9	2025-06-01 17:29:49.532	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
14fb24f4-46af-414c-9d4f-519d33484092	2025-06-01 17:31:57.238	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
6de9943f-e8c6-4a8c-97ba-18c88e78d5bd	2025-06-01 17:37:32.932	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
dff2ccae-12dd-4b82-9c45-6f7730bc9ddf	2025-06-01 17:39:23.713	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
51664648-2a50-4621-99a1-5bde0c17f05b	2025-06-01 17:42:02.971	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
5da18a77-0a7c-4831-bbc5-f2b20dc16835	2025-06-01 17:47:22.664	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
0417dcba-46cc-4987-86f7-e67050effbc2	2025-06-01 17:48:30.266	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
8a5c86bc-25ad-434e-bb8a-dd93cc18c785	2025-06-01 17:50:47.775	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
27bafc18-f62f-4c59-9e01-082888759750	2025-06-01 17:57:21.295	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
a0d34422-c49f-491a-8445-dd36f17d2ef1	2025-06-01 17:58:49.128	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
e8f2b64c-5409-491d-b244-b22700b49e75	2025-06-01 18:03:32.499	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
23372f19-bd3d-4f7f-b45d-ca6cd8777bd2	2025-06-01 18:08:35.616	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
16623e19-e486-4cd7-b3fc-d807613f8fdd	2025-06-01 18:10:23.283	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
ee1a7bf1-1bf1-4a35-8100-aacdd1d529ed	2025-06-01 18:11:31.621	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
67f2250a-64dc-4209-a92f-a345b60e06ac	2025-06-01 18:16:32.297	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
351f8b9e-abe9-42be-8531-b2aade5b2d1e	2025-06-01 18:17:50.287	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
dc33a536-ee33-4821-8ab3-65e59d551816	2025-06-01 18:18:20.746	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
1107ae51-dd8e-43e2-8dbd-de36a94c216f	2025-06-01 18:18:50.633	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
57925c9a-ef1e-4d7e-8b3a-82f24eba529d	2025-06-01 18:19:20.414	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
e287071b-87bc-46c8-bb18-fe088ab7bb52	2025-06-01 18:22:21.164	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
be552f36-2428-4b13-b591-c8c585a0ee47	2025-06-01 18:23:19.972	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
04416701-4774-4ea9-9b72-f75076dc750c	2025-06-01 18:26:47.858	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
315ee53b-5fd3-4241-8645-c3bc472d5aaa	2025-06-01 18:27:14.21	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
e54e70b5-9607-431b-943c-ed02e9203ae4	2025-06-01 18:29:54.03	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
3aa18c1c-8f9c-40d3-a8f3-977474ff9a67	2025-06-01 19:42:06.419	9a026d8c-9264-4a2f-b8c0-fd58200d55b8
\.


--
-- Data for Name: Payments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Payments" (id, created_at, updated_at, status, amount, currency, receipt_url, payment_intent, "orderId") FROM stdin;
265d303e-dd98-4a92-b9f3-2f499ce6ec40	2025-06-01 19:42:06.913	2025-06-01 19:42:06.913	requires_payment_method	2270	usd	url	pi_3RVHliH65Yc4W3X50TaMIAMa	3aa18c1c-8f9c-40d3-a8f3-977474ff9a67
78bd9e54-b37b-431d-bc1a-dc439c2c40f1	2025-05-28 17:04:45.969	2025-05-28 17:07:28.613	succeeded	1000	usd	url	pi_3RTnPFH65Yc4W3X51OTvAnKA	d5425d14-af10-4208-b7ab-703338dd7f50
b592c5b1-cb68-48fe-b1ac-80cdb1d5fe09	2025-06-01 04:38:01.016	2025-06-01 04:38:01.016	requires_payment_method	1000	usd	url	pi_3RV3emH65Yc4W3X51s3yhfoz	b258d6f3-220e-466b-8c99-ba744b244b18
e9a883b6-cbfa-4028-876d-729ad6d2200f	2025-06-01 04:38:34.919	2025-06-01 04:38:34.919	requires_payment_method	1000	usd	url	pi_3RV3fKH65Yc4W3X50aOakv8i	be5eda20-079b-41f3-81f2-65749f59e4f0
a019a922-683b-4d43-ac6c-87ed4b6a4e8f	2025-06-01 04:41:49.31	2025-06-01 04:41:49.31	requires_payment_method	1000	usd	url	pi_3RV3iTH65Yc4W3X51udrmYHo	a52f7aee-641a-4a37-af02-14664f264314
eaa60263-0e7e-42c5-b3cf-30b84d57a0f3	2025-06-01 04:47:55.013	2025-06-01 04:47:55.013	requires_payment_method	2270	usd	url	pi_3RV3oMH65Yc4W3X51tf7isUu	d38a78cc-d7ef-46c7-bca3-9e52eee789a4
ac19c218-e245-4727-a896-7ad16b9daf5a	2025-06-01 16:36:56.29	2025-06-01 16:36:56.29	requires_payment_method	2270	usd	url	pi_3RVEsWH65Yc4W3X51nIQ2Rxm	dbb1d651-baa5-4e24-8318-76df2ad9b1b8
80a86859-83a8-415b-90ca-aef2e350bfa2	2025-06-01 17:29:50.052	2025-06-01 17:29:50.052	requires_payment_method	2270	usd	url	pi_3RVFhhH65Yc4W3X50jygHX3Z	201c933f-23a7-41dd-b781-68faf28359f9
b81c029d-4ba3-47c7-afad-c2a76fc681a7	2025-06-01 17:31:57.724	2025-06-01 17:31:57.724	requires_payment_method	2270	usd	url	pi_3RVFjlH65Yc4W3X51CypfOzd	14fb24f4-46af-414c-9d4f-519d33484092
93ba0196-3b6c-4040-bcd2-544600eb7b28	2025-06-01 17:37:33.403	2025-06-01 17:37:33.403	requires_payment_method	2270	usd	url	pi_3RVFpBH65Yc4W3X50bgDrvEU	6de9943f-e8c6-4a8c-97ba-18c88e78d5bd
da023ea5-b1e5-4326-a829-ad4aeb8ece02	2025-06-01 17:39:24.192	2025-06-01 17:39:24.192	requires_payment_method	2270	usd	url	pi_3RVFqyH65Yc4W3X50aPhuwzY	dff2ccae-12dd-4b82-9c45-6f7730bc9ddf
8cd336bc-9521-450b-9e8c-161f3f4fa18c	2025-06-01 17:42:03.447	2025-06-01 17:42:03.447	requires_payment_method	2270	usd	url	pi_3RVFtXH65Yc4W3X51PswCqWw	51664648-2a50-4621-99a1-5bde0c17f05b
0f817d33-2f14-4975-bca9-aa6979a27bc7	2025-06-01 17:47:23.178	2025-06-01 17:47:23.178	requires_payment_method	2270	usd	url	pi_3RVFyhH65Yc4W3X51IQrsLw3	5da18a77-0a7c-4831-bbc5-f2b20dc16835
dec03bdc-71b5-4f5b-ab40-4a473a2ea452	2025-06-01 17:48:30.792	2025-06-01 17:48:30.792	requires_payment_method	2270	usd	url	pi_3RVFzmH65Yc4W3X51TDTdF4W	0417dcba-46cc-4987-86f7-e67050effbc2
91586518-a8ee-47b3-92d5-b3708e499525	2025-06-01 17:50:48.442	2025-06-01 17:50:48.442	requires_payment_method	2270	usd	url	pi_3RVG20H65Yc4W3X51Cxedlx9	8a5c86bc-25ad-434e-bb8a-dd93cc18c785
f9fc26fb-e5ac-47cf-aa96-47442222e19c	2025-06-01 17:57:21.745	2025-06-01 17:57:21.745	requires_payment_method	2270	usd	url	pi_3RVG8LH65Yc4W3X51jBh3whK	27bafc18-f62f-4c59-9e01-082888759750
d72fbe17-e94b-4d13-b8f7-418833f17308	2025-06-01 17:58:49.638	2025-06-01 17:58:49.638	requires_payment_method	2270	usd	url	pi_3RVG9lH65Yc4W3X51NDim2tY	a0d34422-c49f-491a-8445-dd36f17d2ef1
66629455-7dce-42d0-9537-40dd4ddf961b	2025-06-01 18:03:33.023	2025-06-01 18:03:33.023	requires_payment_method	2270	usd	url	pi_3RVGEKH65Yc4W3X50gQiapa8	e8f2b64c-5409-491d-b244-b22700b49e75
6daf6693-f575-41c5-baf4-46022870956e	2025-06-01 18:08:36.137	2025-06-01 18:08:36.137	requires_payment_method	2270	usd	url	pi_3RVGJEH65Yc4W3X51k52W2j2	23372f19-bd3d-4f7f-b45d-ca6cd8777bd2
12126444-e9c6-4592-ac3a-3d0e27185e0f	2025-06-01 18:10:23.805	2025-06-01 18:10:23.805	requires_payment_method	2270	usd	url	pi_3RVGKxH65Yc4W3X501beX0v2	16623e19-e486-4cd7-b3fc-d807613f8fdd
5fc32bac-dcb9-45d5-a84d-7b768716dfb6	2025-06-01 18:11:32.13	2025-06-01 18:11:32.13	requires_payment_method	2270	usd	url	pi_3RVGM4H65Yc4W3X511gIqwsr	ee1a7bf1-1bf1-4a35-8100-aacdd1d529ed
948fe691-e67e-415b-a3e8-8a18456422eb	2025-06-01 18:16:32.736	2025-06-01 18:16:32.736	requires_payment_method	2270	usd	url	pi_3RVGQuH65Yc4W3X51LAYxAfy	67f2250a-64dc-4209-a92f-a345b60e06ac
c7026c4c-66d0-430c-82ba-32f5a602ab0d	2025-06-01 18:17:50.755	2025-06-01 18:17:50.755	requires_payment_method	2270	usd	url	pi_3RVGSAH65Yc4W3X51af7S65K	351f8b9e-abe9-42be-8531-b2aade5b2d1e
e826d23a-259d-4124-bbe0-71a426b5c16b	2025-06-01 18:18:21.234	2025-06-01 18:18:21.234	requires_payment_method	2270	usd	url	pi_3RVGSfH65Yc4W3X50kKLJvz7	dc33a536-ee33-4821-8ab3-65e59d551816
645625f1-1cf9-4e61-89e3-61de77297e99	2025-06-01 18:18:51.1	2025-06-01 18:18:51.1	requires_payment_method	2270	usd	url	pi_3RVGT8H65Yc4W3X51Ejf2hgK	1107ae51-dd8e-43e2-8dbd-de36a94c216f
c9c8f3e9-e479-41af-b3a6-1fd029f4feb6	2025-06-01 18:19:20.884	2025-06-01 18:19:20.884	requires_payment_method	2270	usd	url	pi_3RVGTcH65Yc4W3X51TBbBIxL	57925c9a-ef1e-4d7e-8b3a-82f24eba529d
fbc7f41c-de11-484e-9bbc-40736658ea68	2025-06-01 18:22:21.696	2025-06-01 18:22:21.696	requires_payment_method	2270	usd	url	pi_3RVGWXH65Yc4W3X50qfhEHpz	e287071b-87bc-46c8-bb18-fe088ab7bb52
3bd47e4c-2ccd-484a-972a-87eca1dba65d	2025-06-01 18:23:20.257	2025-06-01 18:23:20.257	requires_payment_method	2270	usd	url	pi_3RVGXUH65Yc4W3X506sd1X2V	be552f36-2428-4b13-b591-c8c585a0ee47
e8accdf0-c6a5-4407-8377-15ef376aa2f4	2025-06-01 18:26:48.347	2025-06-01 18:26:48.347	requires_payment_method	2270	usd	url	pi_3RVGaqH65Yc4W3X51oXPHQmR	04416701-4774-4ea9-9b72-f75076dc750c
b9b7aa17-1710-4e2b-9b6c-7cea196db1b1	2025-06-01 18:27:14.726	2025-06-01 18:27:14.726	requires_payment_method	2270	usd	url	pi_3RVGbGH65Yc4W3X50KGG9oQk	315ee53b-5fd3-4241-8645-c3bc472d5aaa
2b30010c-4dea-4772-a5e6-f2c2da1ba39f	2025-06-01 18:29:54.564	2025-06-01 18:29:54.564	requires_payment_method	2270	usd	url	pi_3RVGdqH65Yc4W3X51Xy3nEoS	e54e70b5-9607-431b-943c-ed02e9203ae4
\.


--
-- Data for Name: ProductCategories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ProductCategories" ("productId", "categoryId") FROM stdin;
a2c2fbfd-d43e-4f09-9ff2-b4c87c9b5811	33d3df10-790c-461b-927f-18de5372e3e7
7e72017d-4ebd-4a1e-9ed7-beab581735a8	33d3df10-790c-461b-927f-18de5372e3e7
aaddabb6-d6c0-490f-9d04-8ff52d6fc1aa	70743a51-e47d-49cd-a058-2ab9d9509329
287531d1-db63-411c-9351-5a66961b109c	f9e49e9c-7ee4-4993-afec-deb270606158
ef79bdd1-2baf-47bf-9fd8-47ab4639980f	33d3df10-790c-461b-927f-18de5372e3e7
16686134-d385-45bf-aa3a-a5ce3d7fae72	9ae13785-9b0d-4a7b-9c3a-0dac86488be5
32fe760a-bc5e-4c4c-aa05-98340f8bdf54	9ae13785-9b0d-4a7b-9c3a-0dac86488be5
a2c2fbfd-d43e-4f09-9ff2-b4c87c9b5811	e5e8a6b5-4abf-4f28-bc80-d034a2c765a0
\.


--
-- Data for Name: Products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Products" (id, name, price, created_at, updated_at, brand_id, active) FROM stdin;
7e72017d-4ebd-4a1e-9ed7-beab581735a8	Performance Tee	29.99	2023-02-10 10:00:00	2023-02-10 10:00:00	e83a0e69-0b9a-4c79-a496-e3ce820118c6	t
aaddabb6-d6c0-490f-9d04-8ff52d6fc1aa	Premium Polo	39.99	2023-03-05 11:00:00	2023-03-05 11:00:00	3b4695c0-a8be-4066-967a-3181ccd880b0	t
287531d1-db63-411c-9351-5a66961b109c	Thermal Long Sleeve	34.99	2023-04-20 12:00:00	2023-04-20 12:00:00	f614a1a4-be21-4a3f-88a7-6d8b641011ea	t
ef79bdd1-2baf-47bf-9fd8-47ab4639980f	Graphic Tee	27.99	2023-05-15 13:00:00	2023-05-15 13:00:00	e539d3dc-f2f7-40bc-9d3f-7fbb09e16d8e	t
c97e68c9-0f8c-4ed2-9310-8bbc3fa94b37	Graphic Tee PUT	30	2023-05-15 13:00:00	2023-05-15 13:00:00	e83a0e69-0b9a-4c79-a496-e3ce820118c6	t
2d53bea4-a95d-4445-9f99-e876b3cb2605	Graphic Tee PUT	20	2023-05-15 13:00:00	2023-05-15 13:00:00	e83a0e69-0b9a-4c79-a496-e3ce820118c6	t
f5bdb2cd-ef53-4669-8c44-e19864b5213a	Some Rebook Nike	30	2023-05-15 13:00:00	2023-05-15 13:00:00	e83a0e69-0b9a-4c79-a496-e3ce820118c6	t
7a56e236-feb4-43ea-8a03-875e48a198ff	Lemon Tree	40	2023-05-15 13:00:00	2023-05-15 13:00:00	e83a0e69-0b9a-4c79-a496-e3ce820118c6	t
980a1efe-ac9d-4e3a-aeaa-1642f2f9584d	Quiz Nike	80	2023-05-15 13:00:00	2023-05-15 13:00:00	e83a0e69-0b9a-4c79-a496-e3ce820118c6	t
1d826008-56e7-4025-b369-05516508e57a	Non Graphic	90	2023-05-15 13:00:00	2023-05-15 13:00:00	e83a0e69-0b9a-4c79-a496-e3ce820118c6	t
abaefad0-dd8f-4050-b3a8-507c5d2ff825	Laop kine	50	2023-05-15 13:00:00	2023-05-15 13:00:00	e83a0e69-0b9a-4c79-a496-e3ce820118c6	t
9fbf232d-2ce8-4593-95fd-8712da52e6d6	Graphic Red	34	2023-05-15 13:00:00	2023-05-15 13:00:00	e83a0e69-0b9a-4c79-a496-e3ce820118c6	t
017b5751-88f7-48d8-901f-1806a0c20afa	Blue Tee Put	12.99	2023-05-15 13:00:00	2023-05-15 13:00:00	e83a0e69-0b9a-4c79-a496-e3ce820118c6	t
16686134-d385-45bf-aa3a-a5ce3d7fae72	Blue Cotton	24.99	2023-01-15 09:00:00	2023-01-15 09:00:00	4610aadb-a1bb-461b-8be2-a0898b580d2f	t
32fe760a-bc5e-4c4c-aa05-98340f8bdf54	John's Rocks Spacial	23.23	2025-05-20 22:11:33.414	2025-05-20 22:11:33.414	f614a1a4-be21-4a3f-88a7-6d8b641011ea	t
a2c2fbfd-d43e-4f09-9ff2-b4c87c9b5811	Classic Cotton Lemon Tree	1000	2023-01-15 09:00:00	2025-05-22 20:07:57.643	4610aadb-a1bb-461b-8be2-a0898b580d2f	t
\.


--
-- Data for Name: Roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Roles" (id, name) FROM stdin;
eacd781c-b555-4c7b-baa3-7211eb02fca1	Manager
de5afd5c-67d0-4398-8ef0-96b7d549a9ad	Client
\.


--
-- Data for Name: UserRoles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."UserRoles" ("userId", "roleId") FROM stdin;
9a026d8c-9264-4a2f-b8c0-fd58200d55b8	eacd781c-b555-4c7b-baa3-7211eb02fca1
05b8c6d3-d6e3-4778-9597-eddb7bc9f961	de5afd5c-67d0-4398-8ef0-96b7d549a9ad
65e07502-7e0b-4e7c-8f46-b98132a8ef22	de5afd5c-67d0-4398-8ef0-96b7d549a9ad
9a830c59-2229-4f41-8e0f-091abbd4ee4f	eacd781c-b555-4c7b-baa3-7211eb02fca1
c3e965ef-cf13-4b43-ac28-4ef0e662d186	de5afd5c-67d0-4398-8ef0-96b7d549a9ad
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Users" (id, nickname, first_name, last_name, email, password) FROM stdin;
9a026d8c-9264-4a2f-b8c0-fd58200d55b8	jdoe	John	Doe	john.doe@example.com	$2a$10$xJwL5v5Jz5z5z5z5z5z5zO
05b8c6d3-d6e3-4778-9597-eddb7bc9f961	asmith	Alice	Smith	alice.smith@example.com	$2a$10$xJwL5v5Jz5z5z5z5z5z5zO
65e07502-7e0b-4e7c-8f46-b98132a8ef22	bjohnson	Bob	Johnson	bob.johnson@example.com	$2a$10$xJwL5v5Jz5z5z5z5z5z5zO
9a830c59-2229-4f41-8e0f-091abbd4ee4f	cmiller	Carol	Miller	carol.miller@example.com	$2a$10$xJwL5v5Jz5z5z5z5z5z5zO
c3e965ef-cf13-4b43-ac28-4ef0e662d186	dwilson	David	Wilson	testemailproduct@yopmail.com	$2a$10$xJwL5v5Jz5z5z5z5z5z5zO
\.


--
-- Data for Name: Variants; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Variants" (id, product_id, file_id, size, "textColor", rgb, stock, "createdAt", "updatedAt") FROM stdin;
9fe5a3eb-6ac5-4f50-889e-d7f527568f98	a2c2fbfd-d43e-4f09-9ff2-b4c87c9b5811	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	SMALL	BLACK	000000	100	2023-01-15 09:00:00	2023-01-15 09:00:00
43e167d5-b768-4d3e-8da0-63d4f450ad6f	a2c2fbfd-d43e-4f09-9ff2-b4c87c9b5811	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	MEDIUM	WHITE	FFFFFF	80	2023-01-15 09:00:00	2023-01-15 09:00:00
097f2809-9518-410e-8bb1-e4c440dae922	7e72017d-4ebd-4a1e-9ed7-beab581735a8	e6f5c7ba-a229-40fc-9845-11e6a12808e0	LARGE	ORANGE	FF0000	60	2023-02-10 10:00:00	2023-02-10 10:00:00
a2cad5d5-c491-4714-b9b8-a4ad80afceb5	aaddabb6-d6c0-490f-9d04-8ff52d6fc1aa	85d23de9-9c1b-4519-8a69-29eccceb6f95	X_LARGE	BLUE	0000FF	40	2023-03-05 11:00:00	2023-03-05 11:00:00
c1dc049d-0a84-4815-bf21-940ca68cbd2b	287531d1-db63-411c-9351-5a66961b109c	02d3e5d8-f948-4af9-a0ea-dcf4a2793000	MEDIUM	GREEN	00FF00	30	2023-04-20 12:00:00	2023-04-20 12:00:00
cf594842-22e0-4b99-a5ff-f757fd1b2772	017b5751-88f7-48d8-901f-1806a0c20afa	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	SMALL	BLACK	000000	86	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
b18418a7-680f-49cd-afd3-4f1a64445ea8	017b5751-88f7-48d8-901f-1806a0c20afa	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	MEDIUM	WHITE	FFFFFF	60	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
4bc2c574-63f3-46a3-9bd4-b16ab29ea4ac	017b5751-88f7-48d8-901f-1806a0c20afa	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	LARGE	GREEN	00FF00	61	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
d1bfcbdb-bcc4-4a72-87a6-227120a56cab	017b5751-88f7-48d8-901f-1806a0c20afa	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	X_LARGE	BLUE	0000FF	36	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
5c3b10e1-0097-4f44-9696-622afb0a8e1b	017b5751-88f7-48d8-901f-1806a0c20afa	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	XX_LARGE	YELLOW	FFFF00	30	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
cdb67753-3379-4336-91c5-c35ab82c711c	017b5751-88f7-48d8-901f-1806a0c20afa	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	S4YEARS_XS	PINK	FFC0CB	72	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
552a8d36-82c0-436f-9ff5-e8b1a90971d8	017b5751-88f7-48d8-901f-1806a0c20afa	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	SMALL	SKY_BLUE	87CEEB	55	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
2074f438-e367-41ee-92dc-5bf31332f6f6	017b5751-88f7-48d8-901f-1806a0c20afa	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	MEDIUM	BROWN	A52A2A	13	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
2ec65e41-9a41-4e74-a521-dce2dde0eee9	017b5751-88f7-48d8-901f-1806a0c20afa	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	LARGE	ORANGE	FFA500	31	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
23258662-e116-4240-9e7d-20341cab9dd6	017b5751-88f7-48d8-901f-1806a0c20afa	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	X_LARGE	PURPLE	800080	41	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
2592ad43-16a3-4c05-8a45-97e3e4e626d6	1d826008-56e7-4025-b369-05516508e57a	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	SMALL	BLACK	000000	14	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
0bd73d84-a814-471d-9917-0f65522a24d4	1d826008-56e7-4025-b369-05516508e57a	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	MEDIUM	WHITE	FFFFFF	81	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
bdd6dac9-cf95-49c6-b347-e6aae27e4dc6	1d826008-56e7-4025-b369-05516508e57a	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	LARGE	GREEN	00FF00	77	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
00f1daad-7ed0-40a8-b443-183e92589ca6	1d826008-56e7-4025-b369-05516508e57a	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	X_LARGE	BLUE	0000FF	10	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
51b1f164-bf65-4ffd-af1c-68c6979d6b0b	1d826008-56e7-4025-b369-05516508e57a	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	XX_LARGE	YELLOW	FFFF00	50	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
1042b777-baa6-422d-95c8-e0d15b0aca77	1d826008-56e7-4025-b369-05516508e57a	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	S4YEARS_XS	PINK	FFC0CB	55	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
bd50f8c9-016b-4109-89cb-fab0a49f7e97	1d826008-56e7-4025-b369-05516508e57a	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	SMALL	SKY_BLUE	87CEEB	41	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
be48fd81-09be-4a6b-a2be-b8819934aa5e	1d826008-56e7-4025-b369-05516508e57a	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	MEDIUM	BROWN	A52A2A	97	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
8ccbd778-4645-40ac-bea4-4c56bc9a6357	1d826008-56e7-4025-b369-05516508e57a	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	LARGE	ORANGE	FFA500	74	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
04d4fd38-6a7d-4090-95b6-3208be9ad072	1d826008-56e7-4025-b369-05516508e57a	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	X_LARGE	PURPLE	800080	15	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
918309a3-2360-4cca-9520-cef29ba27cfc	287531d1-db63-411c-9351-5a66961b109c	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	SMALL	BLACK	000000	27	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
4fd72ebd-d8bf-4328-80dd-89f51f372cd1	287531d1-db63-411c-9351-5a66961b109c	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	MEDIUM	WHITE	FFFFFF	59	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
7f9a6528-afae-4af5-a0b8-d06920688b59	287531d1-db63-411c-9351-5a66961b109c	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	LARGE	GREEN	00FF00	93	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
42db9175-ed5d-434e-a136-cf38d579225e	287531d1-db63-411c-9351-5a66961b109c	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	X_LARGE	BLUE	0000FF	29	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
e82023c4-46cd-45cd-bedb-5834e77cc7fd	287531d1-db63-411c-9351-5a66961b109c	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	XX_LARGE	YELLOW	FFFF00	82	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
6e974b5e-7fd1-4c81-8327-a84b78443706	287531d1-db63-411c-9351-5a66961b109c	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	S4YEARS_XS	PINK	FFC0CB	79	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
a9fb7882-512a-4973-b157-824e063c847d	287531d1-db63-411c-9351-5a66961b109c	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	SMALL	SKY_BLUE	87CEEB	38	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
dc23ec7f-bc19-4430-87a1-f38aecd31c96	287531d1-db63-411c-9351-5a66961b109c	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	MEDIUM	BROWN	A52A2A	54	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
cdd8f716-fb11-49c2-8a07-8a513dcb8380	287531d1-db63-411c-9351-5a66961b109c	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	LARGE	ORANGE	FFA500	45	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
0240e701-477d-4a96-a047-662af9013ee6	287531d1-db63-411c-9351-5a66961b109c	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	X_LARGE	PURPLE	800080	37	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
8a17aa45-4744-482c-a0e1-a43e560eb6d5	2d53bea4-a95d-4445-9f99-e876b3cb2605	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	SMALL	BLACK	000000	71	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
29b47c29-9018-4ecd-b4c7-a389d026df41	2d53bea4-a95d-4445-9f99-e876b3cb2605	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	MEDIUM	WHITE	FFFFFF	85	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
3201ced8-8b58-400e-814d-4a2b5e1edd30	2d53bea4-a95d-4445-9f99-e876b3cb2605	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	LARGE	GREEN	00FF00	13	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
e90fadb5-3eb8-49e7-b72e-bea26437d8cf	2d53bea4-a95d-4445-9f99-e876b3cb2605	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	X_LARGE	BLUE	0000FF	87	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
4e22b64d-abfa-4368-a46d-b8afaca9cc54	2d53bea4-a95d-4445-9f99-e876b3cb2605	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	XX_LARGE	YELLOW	FFFF00	30	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
c6754462-ce6e-4505-bd43-1e346c79de87	2d53bea4-a95d-4445-9f99-e876b3cb2605	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	S4YEARS_XS	PINK	FFC0CB	73	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
208faaf7-754b-4f35-8ea6-8251976969d3	2d53bea4-a95d-4445-9f99-e876b3cb2605	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	SMALL	SKY_BLUE	87CEEB	98	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
a9af6cab-12f1-4c3f-9023-125af7989869	2d53bea4-a95d-4445-9f99-e876b3cb2605	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	MEDIUM	BROWN	A52A2A	14	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
bd3660ce-745d-4f34-a032-b731a6dd6d4e	2d53bea4-a95d-4445-9f99-e876b3cb2605	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	LARGE	ORANGE	FFA500	72	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
b3717998-57d7-4268-a76f-8185fe14a1a4	2d53bea4-a95d-4445-9f99-e876b3cb2605	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	X_LARGE	PURPLE	800080	88	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
0f73dec0-6358-4f31-b745-97a2515735b9	7a56e236-feb4-43ea-8a03-875e48a198ff	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	SMALL	BLACK	000000	46	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
f8c9ed85-dc76-4caa-95bb-7e8fc8d3d83e	7a56e236-feb4-43ea-8a03-875e48a198ff	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	MEDIUM	WHITE	FFFFFF	61	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
1c67b398-fc0c-4143-8c4a-b510b4b667a1	7a56e236-feb4-43ea-8a03-875e48a198ff	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	LARGE	GREEN	00FF00	55	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
25280ae0-1697-4f23-94e8-e4062d5551a1	7a56e236-feb4-43ea-8a03-875e48a198ff	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	X_LARGE	BLUE	0000FF	87	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
807305b9-e748-404e-9bcf-e0b05617c729	7a56e236-feb4-43ea-8a03-875e48a198ff	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	XX_LARGE	YELLOW	FFFF00	68	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
616e9208-a54d-49c0-8988-39e7515f46d5	7a56e236-feb4-43ea-8a03-875e48a198ff	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	S4YEARS_XS	PINK	FFC0CB	64	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
9ca0b9d3-ec48-4658-8fed-6abe10ef3f46	7a56e236-feb4-43ea-8a03-875e48a198ff	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	SMALL	SKY_BLUE	87CEEB	58	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
4a40ee10-ba6e-4ae9-9422-9d97b89f3cd5	7a56e236-feb4-43ea-8a03-875e48a198ff	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	MEDIUM	BROWN	A52A2A	70	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
1a461b36-f68e-43bb-a3ed-38a02cc83f50	7a56e236-feb4-43ea-8a03-875e48a198ff	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	LARGE	ORANGE	FFA500	83	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
d28fd4c5-5cba-432b-9fee-360adfc54fa1	7a56e236-feb4-43ea-8a03-875e48a198ff	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	X_LARGE	PURPLE	800080	96	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
16310392-b20e-4654-a1b0-d0e1d59fd0a6	7e72017d-4ebd-4a1e-9ed7-beab581735a8	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	SMALL	BLACK	000000	37	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
9d3a0e04-a771-41d4-b4bc-a08e0483195c	7e72017d-4ebd-4a1e-9ed7-beab581735a8	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	MEDIUM	WHITE	FFFFFF	28	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
60a9eb9c-5a66-4244-b28c-2a2e0cb374c8	7e72017d-4ebd-4a1e-9ed7-beab581735a8	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	LARGE	GREEN	00FF00	33	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
44a04723-04ee-4cf7-9e78-56b9b14da5fc	7e72017d-4ebd-4a1e-9ed7-beab581735a8	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	X_LARGE	BLUE	0000FF	93	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
a260179b-e76d-4322-ade1-5a7bdf0d79d7	7e72017d-4ebd-4a1e-9ed7-beab581735a8	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	XX_LARGE	YELLOW	FFFF00	18	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
33bb9295-f14c-4b4e-92e5-4725b1f39ae1	7e72017d-4ebd-4a1e-9ed7-beab581735a8	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	S4YEARS_XS	PINK	FFC0CB	63	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
5c0f142b-c06d-4327-8450-a4764f14157f	7e72017d-4ebd-4a1e-9ed7-beab581735a8	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	SMALL	SKY_BLUE	87CEEB	67	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
5bcd319c-8d5c-4dce-b6ee-b89b41a95a3f	7e72017d-4ebd-4a1e-9ed7-beab581735a8	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	MEDIUM	BROWN	A52A2A	61	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
393fd562-9f7e-4c3a-bd59-5fe670404617	7e72017d-4ebd-4a1e-9ed7-beab581735a8	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	LARGE	ORANGE	FFA500	63	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
03054ed6-f6ad-4919-80d1-fddbf6388717	7e72017d-4ebd-4a1e-9ed7-beab581735a8	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	X_LARGE	PURPLE	800080	16	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
a2af2244-75a2-4213-bdb2-fe8595118235	980a1efe-ac9d-4e3a-aeaa-1642f2f9584d	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	SMALL	BLACK	000000	32	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
8a48fd0f-0483-45c5-a76f-ef539da21896	980a1efe-ac9d-4e3a-aeaa-1642f2f9584d	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	MEDIUM	WHITE	FFFFFF	12	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
2eb3522e-dc04-405d-8fec-3e4d97dca321	980a1efe-ac9d-4e3a-aeaa-1642f2f9584d	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	LARGE	GREEN	00FF00	100	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
69074ba7-82e9-4c62-a5e3-92b7caafdb41	980a1efe-ac9d-4e3a-aeaa-1642f2f9584d	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	X_LARGE	BLUE	0000FF	15	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
5be9ea35-9fe3-475f-9d8e-cd162d000012	980a1efe-ac9d-4e3a-aeaa-1642f2f9584d	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	XX_LARGE	YELLOW	FFFF00	80	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
0624c31e-d734-44e3-8969-4ea01340fad7	980a1efe-ac9d-4e3a-aeaa-1642f2f9584d	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	S4YEARS_XS	PINK	FFC0CB	52	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
a6249fd2-eef8-4317-8b9b-54c80217ad43	980a1efe-ac9d-4e3a-aeaa-1642f2f9584d	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	SMALL	SKY_BLUE	87CEEB	37	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
35eb9bdb-369c-4a19-ade8-6d1c36780e11	980a1efe-ac9d-4e3a-aeaa-1642f2f9584d	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	MEDIUM	BROWN	A52A2A	66	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
eee225ac-1d76-42d4-a7c4-0804887835fa	980a1efe-ac9d-4e3a-aeaa-1642f2f9584d	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	LARGE	ORANGE	FFA500	98	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
05a6532b-3678-48c4-a8e4-0a711275111f	980a1efe-ac9d-4e3a-aeaa-1642f2f9584d	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	X_LARGE	PURPLE	800080	29	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
e0314582-c1b2-4fdf-aa5e-631a3bff8233	9fbf232d-2ce8-4593-95fd-8712da52e6d6	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	SMALL	BLACK	000000	19	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
5160ae2a-99ad-4101-9911-69d9f568f8ac	9fbf232d-2ce8-4593-95fd-8712da52e6d6	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	MEDIUM	WHITE	FFFFFF	58	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
08d84283-4933-43ad-affe-30d02115d7d3	9fbf232d-2ce8-4593-95fd-8712da52e6d6	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	LARGE	GREEN	00FF00	99	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
2ac24fa7-eda5-4e32-9116-6324ab294644	9fbf232d-2ce8-4593-95fd-8712da52e6d6	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	X_LARGE	BLUE	0000FF	66	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
8634e019-d5b2-462d-bdec-d95238629378	9fbf232d-2ce8-4593-95fd-8712da52e6d6	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	XX_LARGE	YELLOW	FFFF00	52	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
a2581c20-0a15-437f-bea6-7b76f22cb15d	9fbf232d-2ce8-4593-95fd-8712da52e6d6	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	S4YEARS_XS	PINK	FFC0CB	20	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
3297c9f7-7edd-48fd-accd-209f23913030	9fbf232d-2ce8-4593-95fd-8712da52e6d6	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	SMALL	SKY_BLUE	87CEEB	82	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
349c09c2-10b7-4c30-96c2-348632ff7672	9fbf232d-2ce8-4593-95fd-8712da52e6d6	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	MEDIUM	BROWN	A52A2A	43	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
fd6602d3-00cc-420f-9fb0-44fc0e260346	9fbf232d-2ce8-4593-95fd-8712da52e6d6	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	LARGE	ORANGE	FFA500	88	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
0257d12c-0b8d-4c5b-8ad1-38753a57003e	9fbf232d-2ce8-4593-95fd-8712da52e6d6	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	X_LARGE	PURPLE	800080	40	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
ff0473a8-39e1-4818-9df7-6c5c4057277d	a2c2fbfd-d43e-4f09-9ff2-b4c87c9b5811	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	SMALL	BLACK	000000	48	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
53d5cea3-c8a4-4d33-9524-88d4368501d7	a2c2fbfd-d43e-4f09-9ff2-b4c87c9b5811	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	MEDIUM	WHITE	FFFFFF	77	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
6c8437c2-bea7-426b-aadb-faa1d0a0c05b	a2c2fbfd-d43e-4f09-9ff2-b4c87c9b5811	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	LARGE	GREEN	00FF00	89	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
1fba1920-a48d-4ed7-84ec-bc7012d3e8a4	a2c2fbfd-d43e-4f09-9ff2-b4c87c9b5811	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	X_LARGE	BLUE	0000FF	21	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
9b515a40-54b4-44a4-be69-fe7acd014287	a2c2fbfd-d43e-4f09-9ff2-b4c87c9b5811	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	XX_LARGE	YELLOW	FFFF00	45	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
18cc486b-7641-4f3c-b8b0-a73668cd8d6e	a2c2fbfd-d43e-4f09-9ff2-b4c87c9b5811	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	S4YEARS_XS	PINK	FFC0CB	36	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
41c58a60-7e65-4268-a69f-9669e8df72f6	a2c2fbfd-d43e-4f09-9ff2-b4c87c9b5811	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	SMALL	SKY_BLUE	87CEEB	44	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
497e9be5-6ce6-4bf5-9908-051c3db0e6ea	a2c2fbfd-d43e-4f09-9ff2-b4c87c9b5811	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	MEDIUM	BROWN	A52A2A	93	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
c74c7332-97dd-4a7a-b8de-80feb9f2b3f0	a2c2fbfd-d43e-4f09-9ff2-b4c87c9b5811	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	LARGE	ORANGE	FFA500	65	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
8715d48f-70c0-40ee-815e-659cf1c30c4a	a2c2fbfd-d43e-4f09-9ff2-b4c87c9b5811	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	X_LARGE	PURPLE	800080	72	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
e7c0374a-be59-424e-948d-0ffb36b48478	aaddabb6-d6c0-490f-9d04-8ff52d6fc1aa	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	SMALL	BLACK	000000	31	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
a186673d-2621-4cc2-885d-33242a1fd469	aaddabb6-d6c0-490f-9d04-8ff52d6fc1aa	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	MEDIUM	WHITE	FFFFFF	74	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
54ee1989-8686-43f8-8894-1a5805d3639c	aaddabb6-d6c0-490f-9d04-8ff52d6fc1aa	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	LARGE	GREEN	00FF00	92	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
942a7d7f-f1df-40bc-826d-54b72d1f3067	aaddabb6-d6c0-490f-9d04-8ff52d6fc1aa	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	X_LARGE	BLUE	0000FF	13	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
3d0d92bd-6a54-4179-97e9-e6fd2c8651c2	aaddabb6-d6c0-490f-9d04-8ff52d6fc1aa	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	XX_LARGE	YELLOW	FFFF00	81	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
4ee04a25-2e0b-40f2-84ae-447b72f02cc0	aaddabb6-d6c0-490f-9d04-8ff52d6fc1aa	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	S4YEARS_XS	PINK	FFC0CB	87	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
54341d9a-9ff7-4ec2-9ab2-e58663202f40	aaddabb6-d6c0-490f-9d04-8ff52d6fc1aa	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	SMALL	SKY_BLUE	87CEEB	73	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
7ce488ad-cf76-4099-969f-b208173a62e5	aaddabb6-d6c0-490f-9d04-8ff52d6fc1aa	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	MEDIUM	BROWN	A52A2A	17	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
3c50f08f-d1e1-426b-b99b-b1d439938691	aaddabb6-d6c0-490f-9d04-8ff52d6fc1aa	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	LARGE	ORANGE	FFA500	24	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
ebe97780-3106-4e92-a576-fd9777598464	aaddabb6-d6c0-490f-9d04-8ff52d6fc1aa	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	X_LARGE	PURPLE	800080	98	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
eeaf1f9a-76d5-424f-96ec-d4e93be97c20	abaefad0-dd8f-4050-b3a8-507c5d2ff825	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	SMALL	BLACK	000000	28	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
f592586d-de5a-436e-b65e-aee07ae86d26	abaefad0-dd8f-4050-b3a8-507c5d2ff825	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	MEDIUM	WHITE	FFFFFF	63	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
a205940d-2451-4822-b127-07aa0b587eca	abaefad0-dd8f-4050-b3a8-507c5d2ff825	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	LARGE	GREEN	00FF00	37	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
312c472d-a1a0-4a36-81d6-cdde8b41bb13	abaefad0-dd8f-4050-b3a8-507c5d2ff825	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	X_LARGE	BLUE	0000FF	55	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
0342edb3-c8a8-4cc6-8d34-636a0b4c5e61	abaefad0-dd8f-4050-b3a8-507c5d2ff825	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	XX_LARGE	YELLOW	FFFF00	66	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
797b9b85-ce5f-4c04-805c-521932717c27	abaefad0-dd8f-4050-b3a8-507c5d2ff825	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	S4YEARS_XS	PINK	FFC0CB	89	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
24805ebf-db4d-4f90-9e11-72f3840aa504	abaefad0-dd8f-4050-b3a8-507c5d2ff825	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	SMALL	SKY_BLUE	87CEEB	62	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
fafaa9bb-555c-47d5-aeac-fb21ce3db568	abaefad0-dd8f-4050-b3a8-507c5d2ff825	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	MEDIUM	BROWN	A52A2A	60	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
160b2a29-b3ea-44f6-af50-e7b47ca374e5	abaefad0-dd8f-4050-b3a8-507c5d2ff825	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	LARGE	ORANGE	FFA500	71	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
257bcdc5-acce-42ee-8e89-9b879a4a01c5	abaefad0-dd8f-4050-b3a8-507c5d2ff825	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	X_LARGE	PURPLE	800080	13	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
ccd37c33-f639-4013-a114-677371397779	c97e68c9-0f8c-4ed2-9310-8bbc3fa94b37	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	SMALL	BLACK	000000	58	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
6151bc7f-f1f7-4d33-97e8-4d57217c9f75	c97e68c9-0f8c-4ed2-9310-8bbc3fa94b37	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	MEDIUM	WHITE	FFFFFF	80	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
47cc593f-56a6-453d-acb2-1790ba5d14ca	c97e68c9-0f8c-4ed2-9310-8bbc3fa94b37	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	LARGE	GREEN	00FF00	58	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
13e8aa84-9d6a-4e05-a682-f9e47fa3a154	c97e68c9-0f8c-4ed2-9310-8bbc3fa94b37	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	X_LARGE	BLUE	0000FF	12	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
3b72c6d3-a23b-45a4-9f31-b6f4337fecd8	c97e68c9-0f8c-4ed2-9310-8bbc3fa94b37	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	XX_LARGE	YELLOW	FFFF00	94	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
f23603c9-4928-4f3f-8e61-cdeb931e0459	c97e68c9-0f8c-4ed2-9310-8bbc3fa94b37	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	S4YEARS_XS	PINK	FFC0CB	16	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
841d5fea-5926-45dd-8029-40e2e5a4a36e	c97e68c9-0f8c-4ed2-9310-8bbc3fa94b37	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	SMALL	SKY_BLUE	87CEEB	94	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
43f51703-1383-458b-898d-48087fe68194	c97e68c9-0f8c-4ed2-9310-8bbc3fa94b37	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	MEDIUM	BROWN	A52A2A	65	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
ffaecaf0-9f21-4e1c-8f55-5ef131e74012	c97e68c9-0f8c-4ed2-9310-8bbc3fa94b37	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	LARGE	ORANGE	FFA500	44	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
aca85dbb-fa7f-49db-915e-29dd2d528648	c97e68c9-0f8c-4ed2-9310-8bbc3fa94b37	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	X_LARGE	PURPLE	800080	98	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
b2e79bc9-b666-42ab-882c-aef38823dbc7	ef79bdd1-2baf-47bf-9fd8-47ab4639980f	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	SMALL	BLACK	000000	74	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
e460c132-1253-4394-9613-8caed14d92a0	ef79bdd1-2baf-47bf-9fd8-47ab4639980f	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	MEDIUM	WHITE	FFFFFF	57	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
fd0db8d7-ef7a-4793-a3f5-13078be56ad0	ef79bdd1-2baf-47bf-9fd8-47ab4639980f	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	LARGE	GREEN	00FF00	92	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
e081c887-140d-4395-af23-a0a6c4ddee7e	ef79bdd1-2baf-47bf-9fd8-47ab4639980f	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	X_LARGE	BLUE	0000FF	20	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
cb04f9bd-43ed-4abf-90c6-06fb67c967b8	ef79bdd1-2baf-47bf-9fd8-47ab4639980f	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	XX_LARGE	YELLOW	FFFF00	30	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
e8d2bab4-0778-49f9-989f-706e2d2d5c69	ef79bdd1-2baf-47bf-9fd8-47ab4639980f	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	S4YEARS_XS	PINK	FFC0CB	75	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
a4f92321-83a2-4466-b794-920c4c782006	ef79bdd1-2baf-47bf-9fd8-47ab4639980f	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	SMALL	SKY_BLUE	87CEEB	98	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
9dd91a1e-e47e-416a-b02c-d9256739e9aa	ef79bdd1-2baf-47bf-9fd8-47ab4639980f	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	MEDIUM	BROWN	A52A2A	37	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
48dbab40-ea56-4abc-9205-1cfc05d92be1	ef79bdd1-2baf-47bf-9fd8-47ab4639980f	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	LARGE	ORANGE	FFA500	60	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
2ec48dad-d16f-4f99-b198-a84de3992718	ef79bdd1-2baf-47bf-9fd8-47ab4639980f	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	X_LARGE	PURPLE	800080	49	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
c22f7cd4-903b-45c2-84d8-f4fa56d22d30	f5bdb2cd-ef53-4669-8c44-e19864b5213a	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	SMALL	BLACK	000000	47	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
e3e2e02b-ef1a-4417-a9a5-13abfb0f19c5	f5bdb2cd-ef53-4669-8c44-e19864b5213a	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	MEDIUM	WHITE	FFFFFF	24	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
c3dd5d39-a126-4a8b-8ba3-27b26e72816a	f5bdb2cd-ef53-4669-8c44-e19864b5213a	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	LARGE	GREEN	00FF00	62	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
549d1788-f9b9-46c1-b8e2-f398ddf09442	f5bdb2cd-ef53-4669-8c44-e19864b5213a	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	X_LARGE	BLUE	0000FF	26	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
fad93b25-4b78-4f54-8b36-426d6f828161	f5bdb2cd-ef53-4669-8c44-e19864b5213a	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	XX_LARGE	YELLOW	FFFF00	56	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
2b73821d-99c7-4a39-9c74-820c7a9edfb0	f5bdb2cd-ef53-4669-8c44-e19864b5213a	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	S4YEARS_XS	PINK	FFC0CB	89	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
5fb975b6-675a-41ea-8f4f-ed634a538f62	f5bdb2cd-ef53-4669-8c44-e19864b5213a	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	SMALL	SKY_BLUE	87CEEB	26	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
245bbc3d-e1b4-4b48-baf3-3e1777ef3704	f5bdb2cd-ef53-4669-8c44-e19864b5213a	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	MEDIUM	BROWN	A52A2A	48	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
1e1c0c1a-e5aa-4cd1-9410-8c5ee7fafbec	f5bdb2cd-ef53-4669-8c44-e19864b5213a	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	LARGE	ORANGE	FFA500	27	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
52ce9a5b-2a12-4676-8e33-3054a76902ac	f5bdb2cd-ef53-4669-8c44-e19864b5213a	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	X_LARGE	PURPLE	800080	70	2025-05-20 19:39:32.494	2025-05-20 19:39:32.494
49f5ce95-b5cc-4563-a227-34db3fe2bc46	287531d1-db63-411c-9351-5a66961b109c	02d3e5d8-f948-4af9-a0ea-dcf4a2793000	X_LARGE	PINK	00FF00	5	2023-04-20 12:00:00	2023-04-20 12:00:00
7930c597-29d1-4077-bcb9-e1d7a347b679	16686134-d385-45bf-aa3a-a5ce3d7fae72	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	SMALL	BLUE	000000	10	2023-01-15 09:00:00	2023-01-15 09:00:00
876537ec-21fe-470f-9b24-c68278730556	16686134-d385-45bf-aa3a-a5ce3d7fae72	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	LARGE	BLUE	000000	12	2023-01-15 09:00:00	2023-01-15 09:00:00
88c27d53-29f1-4e15-a554-6ad0ff0ea6d0	16686134-d385-45bf-aa3a-a5ce3d7fae72	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	X_LARGE	BLUE	000000	3	2023-01-15 09:00:00	2023-01-15 09:00:00
32782783-7e7b-43d5-b102-11f929f3f0f2	16686134-d385-45bf-aa3a-a5ce3d7fae72	38485ebe-5d67-47c0-9fc9-f2d3d4b91dde	XX_LARGE	BLUE	000000	5	2023-01-15 09:00:00	2023-01-15 09:00:00
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
6218a21e-a13d-4d49-ba55-8d6ad69df5b6	88d310f507276a1f8027f31eb4ca0a4a9bdbdb77f2f8d5b11741b82e524888da	2025-05-19 17:01:14.321558+00	20250519170114_init	\N	\N	2025-05-19 17:01:14.300778+00	1
aa71764e-0cb0-4284-aa49-47855d71b7b2	d76c10843248cec81945706e72b8aea52072e2c1128b9e6e9e41ed66bbeb7803	2025-05-21 16:53:32.492759+00	20250521165332_active_field_product	\N	\N	2025-05-21 16:53:32.47956+00	1
97c8a002-a1d9-4248-9c3e-aa0f42d1e364	e4c05a35a5d23a5a6c8f54b683f3adcf042d5ea7210b2ee8e7fab977ce2ed97a	2025-05-25 15:20:52.866871+00	20250525152052_unique_email	\N	\N	2025-05-25 15:20:52.856855+00	1
462f5f19-acd7-4fde-99f5-b8788c0706bc	a190853f5e0a791c37be4c80d102e27fb4b0c983e1993716a69671fafcf133f3	2025-05-25 21:30:18.774424+00	20250525213018_added_orders_schema	\N	\N	2025-05-25 21:30:18.760342+00	1
9e0b9961-50f7-4b21-ba93-14a7423d2690	16c6eb6f9145e59938dc834e1791900981c2789c4ab9e0bb508d941534c352e3	2025-05-25 23:00:21.593112+00	20250525230021_order_deatail_to_variatns	\N	\N	2025-05-25 23:00:21.584397+00	1
648ab0f0-cbb0-409e-918f-0993845010bb	fcc80f1f4686f393d9168677c91243188bd9bb0e09b65d24bdb5d039b1f90176	2025-05-25 23:04:52.032006+00	20250525230451_cart_detail_to_variants	\N	\N	2025-05-25 23:04:52.023668+00	1
541f4b92-eb36-4c43-a551-d30b6d5eeb0a	4cac803038159496dfa67ba3cd1e586a107f6dcb191642dc8e91965178266972	2025-05-27 16:05:07.33937+00	20250527160507_add_payments_table	\N	\N	2025-05-27 16:05:07.322734+00	1
47aa87ff-b16e-42d2-9709-243ed5562bdd	1ea50fb0fa480a3f91b94849ab88cf4fcd8b245ce66178e3b09357b5590f0195	2025-05-28 16:53:04.890003+00	20250528165304_unique_payment_intent	\N	\N	2025-05-28 16:53:04.879323+00	1
87bea5ad-edfa-474f-af6c-18f9be27a4ee	c4564b8e05c3e036bb1c34ef23d3719ff1c5aca7b1f0f738f165dd9875a0f575	2025-05-28 17:03:49.649473+00	20250528170349_remove_strip_checkout_id	\N	\N	2025-05-28 17:03:49.641789+00	1
74af56ca-8c12-488d-a645-4d1fde4cc77f	ef1d9ccfc7c4b7a51abd9d0e28b2bd2c266f24e8337fa37f8f265144c0e29022	2025-05-28 21:12:18.087754+00	20250528211217_add_image_url	\N	\N	2025-05-28 21:12:18.080157+00	1
a0ab121c-6087-4428-85e0-53d549877ea1	eaacee649b301c4b6b5aacf163546bd52a4d7e42722cdaba6419d2b857c56228	2025-06-01 05:55:19.363229+00	20250601055519_add_created_to_likes	\N	\N	2025-06-01 05:55:19.355031+00	1
\.


--
-- Name: Brands Brands_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Brands"
    ADD CONSTRAINT "Brands_pkey" PRIMARY KEY (id);


--
-- Name: CartDetails CartDetails_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CartDetails"
    ADD CONSTRAINT "CartDetails_pkey" PRIMARY KEY (id);


--
-- Name: Carts Carts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Carts"
    ADD CONSTRAINT "Carts_pkey" PRIMARY KEY (id);


--
-- Name: Categories Categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Categories"
    ADD CONSTRAINT "Categories_pkey" PRIMARY KEY (id);


--
-- Name: Files Files_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Files"
    ADD CONSTRAINT "Files_pkey" PRIMARY KEY (id);


--
-- Name: Likes Likes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Likes"
    ADD CONSTRAINT "Likes_pkey" PRIMARY KEY (user_id, "productId");


--
-- Name: OrderDetails OrderDetails_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."OrderDetails"
    ADD CONSTRAINT "OrderDetails_pkey" PRIMARY KEY (id);


--
-- Name: Orders Orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Orders"
    ADD CONSTRAINT "Orders_pkey" PRIMARY KEY (id);


--
-- Name: Payments Payments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Payments"
    ADD CONSTRAINT "Payments_pkey" PRIMARY KEY (id);


--
-- Name: ProductCategories ProductCategories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ProductCategories"
    ADD CONSTRAINT "ProductCategories_pkey" PRIMARY KEY ("productId", "categoryId");


--
-- Name: Products Products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Products"
    ADD CONSTRAINT "Products_pkey" PRIMARY KEY (id);


--
-- Name: Roles Roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Roles"
    ADD CONSTRAINT "Roles_pkey" PRIMARY KEY (id);


--
-- Name: UserRoles UserRoles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UserRoles"
    ADD CONSTRAINT "UserRoles_pkey" PRIMARY KEY ("userId", "roleId");


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- Name: Variants Variants_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Variants"
    ADD CONSTRAINT "Variants_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Payments_orderId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Payments_orderId_key" ON public."Payments" USING btree ("orderId");


--
-- Name: Payments_payment_intent_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Payments_payment_intent_key" ON public."Payments" USING btree (payment_intent);


--
-- Name: Users_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Users_email_key" ON public."Users" USING btree (email);


--
-- Name: CartDetails CartDetails_cart_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CartDetails"
    ADD CONSTRAINT "CartDetails_cart_id_fkey" FOREIGN KEY (cart_id) REFERENCES public."Carts"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CartDetails CartDetails_variant_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CartDetails"
    ADD CONSTRAINT "CartDetails_variant_id_fkey" FOREIGN KEY (variant_id) REFERENCES public."Variants"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Carts Carts_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Carts"
    ADD CONSTRAINT "Carts_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Categories Categories_parentId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Categories"
    ADD CONSTRAINT "Categories_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES public."Categories"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Likes Likes_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Likes"
    ADD CONSTRAINT "Likes_productId_fkey" FOREIGN KEY ("productId") REFERENCES public."Products"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Likes Likes_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Likes"
    ADD CONSTRAINT "Likes_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: OrderDetails OrderDetails_orderDetails_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."OrderDetails"
    ADD CONSTRAINT "OrderDetails_orderDetails_id_fkey" FOREIGN KEY ("orderDetails_id") REFERENCES public."Orders"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: OrderDetails OrderDetails_variant_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."OrderDetails"
    ADD CONSTRAINT "OrderDetails_variant_id_fkey" FOREIGN KEY (variant_id) REFERENCES public."Variants"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Orders Orders_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Orders"
    ADD CONSTRAINT "Orders_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Payments Payments_orderId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Payments"
    ADD CONSTRAINT "Payments_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES public."Orders"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: ProductCategories ProductCategories_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ProductCategories"
    ADD CONSTRAINT "ProductCategories_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public."Categories"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: ProductCategories ProductCategories_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ProductCategories"
    ADD CONSTRAINT "ProductCategories_productId_fkey" FOREIGN KEY ("productId") REFERENCES public."Products"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Products Products_brand_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Products"
    ADD CONSTRAINT "Products_brand_id_fkey" FOREIGN KEY (brand_id) REFERENCES public."Brands"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: UserRoles UserRoles_roleId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UserRoles"
    ADD CONSTRAINT "UserRoles_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES public."Roles"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: UserRoles UserRoles_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UserRoles"
    ADD CONSTRAINT "UserRoles_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Variants Variants_file_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Variants"
    ADD CONSTRAINT "Variants_file_id_fkey" FOREIGN KEY (file_id) REFERENCES public."Files"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Variants Variants_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Variants"
    ADD CONSTRAINT "Variants_product_id_fkey" FOREIGN KEY (product_id) REFERENCES public."Products"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

