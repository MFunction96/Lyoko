SET GLOBAL innodb_large_prefix=1;
SET GLOBAL innodb_file_per_table=ON;
SET GLOBAL innodb_file_format=Barracuda;
SET GLOBAL innodb_default_row_format = 'DYNAMIC';

SET GLOBAL character_set_client = 'utf8mb4';
SET GLOBAL character_set_results = 'utf8mb4';
SET GLOBAL character_set_connection = 'utf8mb4';
SET GLOBAL character_set_database = 'utf8mb4';
SET GLOBAL character_set_server = 'utf8mb4';
SET GLOBAL character_set_results = 'utf8mb4';
SET character_set_client = 'utf8mb4';
SET character_set_results = 'utf8mb4';
SET character_set_connection = 'utf8mb4';
SET character_set_database = 'utf8mb4';
SET character_set_server = 'utf8mb4';
SET character_set_results = 'utf8mb4';

SHOW VARIABLES LIKE 'character%';
SHOW GLOBAL VARIABLES LIKE 'character%';
