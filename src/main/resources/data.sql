drop table selectors if exists;
drop table users if exists;
create table selectors(id serial,parent_id integer,name varchar(255));
create table users(id serial,name varchar(255),selectors integer array,att boolean);
INSERT INTO selectors (id, parent_id, name) VALUES (1, null, 'Manufacturing');

INSERT INTO selectors (id, parent_id, name) VALUES (19, 1, 'Manufacturing');
INSERT INTO selectors (id, parent_id, name) VALUES (18, 1, 'Electronics and Optics');
INSERT INTO selectors (id, parent_id, name) VALUES (6, 1, 'Food and Beverage');

INSERT INTO selectors (id, parent_id, name) VALUES (342, 6, 'Bakery & confectionery products');
INSERT INTO selectors (id, parent_id, name) VALUES (43, 6, 'Beverages');
INSERT INTO selectors (id, parent_id, name) VALUES (42, 6, 'Fish & fish products');
INSERT INTO selectors (id, parent_id, name) VALUES (40, 6, 'Meat & meat products');
INSERT INTO selectors (id, parent_id, name) VALUES (39, 6, 'Milk &a dairy products');
INSERT INTO selectors (id, parent_id, name) VALUES (437, 6, 'Other');
INSERT INTO selectors (id, parent_id, name) VALUES (378, 6, 'Sweets & snack food');

INSERT INTO selectors (id, parent_id, name) VALUES (13, 1, 'Furniture');

INSERT INTO selectors (id, parent_id, name) VALUES (389, 13, 'Bathroom/sauna');
INSERT INTO selectors (id, parent_id, name) VALUES (385, 13, 'Bedroom');
INSERT INTO selectors (id, parent_id, name) VALUES (390, 13, 'Children’s room');
INSERT INTO selectors (id, parent_id, name) VALUES (98, 13, 'Kitchen');
INSERT INTO selectors (id, parent_id, name) VALUES (101, 13, 'Living room');
INSERT INTO selectors (id, parent_id, name) VALUES (392, 13, 'Office');
INSERT INTO selectors (id, parent_id, name) VALUES (394, 13, 'Other (Furniture)');
INSERT INTO selectors (id, parent_id, name) VALUES (341, 13, 'Outdoor');
INSERT INTO selectors (id, parent_id, name) VALUES (99, 13, 'Project furniture');

INSERT INTO selectors (id, parent_id, name) VALUES (12, 1, 'Machinery');

INSERT INTO selectors (id, parent_id, name) VALUES (94, 12, 'Machinery components');
INSERT INTO selectors (id, parent_id, name) VALUES (91, 12, 'Machinery equipment/tools');
INSERT INTO selectors (id, parent_id, name) VALUES (224, 12, 'Manufacture of machinery');
INSERT INTO selectors (id, parent_id, name) VALUES (97, 12, 'Maritime');

INSERT INTO selectors (id, parent_id, name) VALUES (271, 97, 'Aluminium and steel workboats');
INSERT INTO selectors (id, parent_id, name) VALUES (269, 97, 'Boat/Yacht building');
INSERT INTO selectors (id, parent_id, name) VALUES (230, 97, 'Ship repair and conversion');

INSERT INTO selectors (id, parent_id, name) VALUES (93, 12, 'Metal structures');
INSERT INTO selectors (id, parent_id, name) VALUES (508, 12, 'Other');
INSERT INTO selectors (id, parent_id, name) VALUES (227, 12, 'Repair and maintenance service');

INSERT INTO selectors (id, parent_id, name) VALUES (11, 1, 'Metalworking');

INSERT INTO selectors (id, parent_id, name) VALUES (67, 11, 'Construction of metal structures');
INSERT INTO selectors (id, parent_id, name) VALUES (263, 11, 'Houses and buildings');
INSERT INTO selectors (id, parent_id, name) VALUES (267, 11, 'Metal products');
INSERT INTO selectors (id, parent_id, name) VALUES (542, 11, 'Metal works');

INSERT INTO selectors (id, parent_id, name) VALUES (75, 542, 'CNC-machining');
INSERT INTO selectors (id, parent_id, name) VALUES (62, 542, 'Forgings, Fasteners');
INSERT INTO selectors (id, parent_id, name) VALUES (69, 542, 'Gas, Plasma, Laser cutting');
INSERT INTO selectors (id, parent_id, name) VALUES (66, 542, 'MIG, TIG, Aluminum welding');

INSERT INTO selectors (id, parent_id, name) VALUES (9, 1, 'Plastic and Rubber');

INSERT INTO selectors (id, parent_id, name) VALUES (54, 9, 'Packaging');
INSERT INTO selectors (id, parent_id, name) VALUES (556, 9, 'Plastic goods');
INSERT INTO selectors (id, parent_id, name) VALUES (559, 9, 'Plastic processing technology');

INSERT INTO selectors (id, parent_id, name) VALUES (55, 559, 'Blowing');
INSERT INTO selectors (id, parent_id, name) VALUES (57, 559, 'Moulding');
INSERT INTO selectors (id, parent_id, name) VALUES (53, 559, 'Plastics welding and processing');

INSERT INTO selectors (id, parent_id, name) VALUES (560, 9, 'Plastic profiles');

INSERT INTO selectors (id, parent_id, name) VALUES (5, 1, 'Printing');

INSERT INTO selectors (id, parent_id, name) VALUES (148, 5, 'Advertising');
INSERT INTO selectors (id, parent_id, name) VALUES (150, 5, 'Book/Periodicals printing');
INSERT INTO selectors (id, parent_id, name) VALUES (145, 5, 'Labelling and packaging printing');

INSERT INTO selectors (id, parent_id, name) VALUES (7, 1, 'Textile and Clothing');

INSERT INTO selectors (id, parent_id, name) VALUES (44, 7, 'Clothing');
INSERT INTO selectors (id, parent_id, name) VALUES (45, 7, 'Textile');

INSERT INTO selectors (id, parent_id, name) VALUES (8, 1, 'Wood');

INSERT INTO selectors (id, parent_id, name) VALUES (337, 8, 'Other (Wood)');
INSERT INTO selectors (id, parent_id, name) VALUES (51, 8, 'Wooden building materials');
INSERT INTO selectors (id, parent_id, name) VALUES (47, 8, 'Wooden houses');

INSERT INTO selectors (id, parent_id, name) VALUES (3, null, 'Other');

INSERT INTO selectors (id, parent_id, name) VALUES (37, 3, 'Creative industries');
INSERT INTO selectors (id, parent_id, name) VALUES (29, 3, 'Energy technology');
INSERT INTO selectors (id, parent_id, name) VALUES (33, 3, 'Environment');

INSERT INTO selectors (id, parent_id, name) VALUES (2, null, 'Service');

INSERT INTO selectors (id, parent_id, name) VALUES (25, 2, 'Business services');
INSERT INTO selectors (id, parent_id, name) VALUES (35, 2, 'Engineering');
INSERT INTO selectors (id, parent_id, name) VALUES (28, 2, 'Information Technology and Telecommunications');

INSERT INTO selectors (id, parent_id, name) VALUES (581, 28, 'Data processing, Web portals, E-marketing');
INSERT INTO selectors (id, parent_id, name) VALUES (576, 28, 'Programming, Consultancy');
INSERT INTO selectors (id, parent_id, name) VALUES (121, 28, 'Software, Hardware');
INSERT INTO selectors (id, parent_id, name) VALUES (122, 28, 'Telecommunications');

INSERT INTO selectors (id, parent_id, name) VALUES (22, 2, 'Tourism');
INSERT INTO selectors (id, parent_id, name) VALUES (141, 2, 'Translation services');
INSERT INTO selectors (id, parent_id, name) VALUES (21, 2, 'Transport and Logistics');

INSERT INTO selectors (id, parent_id, name) VALUES (111, 21, 'Air');
INSERT INTO selectors (id, parent_id, name) VALUES (114, 21, 'Rail');
INSERT INTO selectors (id, parent_id, name) VALUES (112, 21, 'Road');
INSERT INTO selectors (id, parent_id, name) VALUES (113, 21, 'Water');
