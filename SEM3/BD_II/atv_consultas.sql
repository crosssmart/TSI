
SELECT * FROM alunos ORDER BY id ASC
SELECT * FROM alunos ORDER BY id DESC

--AND
SELECT * FROM alunos
WHERE idade  >= 18 AND curso_id = 1

--OR
SELECT * FROM alunos
WHERE curso_id = 1 OR curso_id = 2

--NOT
SELECT * FROM alunos
WHERE NOT curso_id = 1

--IS NULL
SELECT * FROM alunos WHERE telefone IS NULL

--IS NOT NULL
SELECT * FROM alunos WHERE telefone IS NOT NULL

--INNER JOIN apenas alunos com curso correspondente
SELECT alunos.nome AS aluno, cursos.nome AS curso
FROM alunos INNER JOIN cursos ON alunos.curso_id = cursos.id
ORDER BY aluno

--INNER JOIN sem o AS
SELECT alunos.nome, cursos.nome FROM alunos 
INNER JOIN cursos ON alunos.curso_id = cursos.id

--LEFT JOIN todos os alunos, mesmo sem curso correspondente
SELECT alunos.nome AS aluno, cursos.nome AS curso 
FROM alunos 
LEFT JOIN cursos ON alunos.curso_id = cursos.id
ORDER BY aluno

--RIGHT JOIN todos os alunos, mesmo sem alunos matriculados
SELECT alunos.nome AS aluno, cursos.nome AS curso 
FROM alunos 
RIGHT JOIN cursos ON alunos.curso_id = cursos.id
ORDER BY aluno


--FULL JOIN todas
SELECT alunos.nome AS aluno, cursos.nome AS curso 
FROM alunos 
FULL JOIN cursos ON alunos.curso_id = cursos.id
ORDER BY aluno


-- Atividades
--1
SELECT * FROM alunos WHERE telefone IS NULL;

--2
SELECT * FROM alunos WHERE telefone IS NOT NULL;

--3
SELECT * FROM alunos 
WHERE idade > 21 AND salario > 2500;

--4
SELECT nome, salario FROM funcionarios
WHERE departamento = 'TI';

--5
SELECT * FROM professores WHERE disciplina = 'Programação' OR 
disciplina = 'Estrutura de Dados';

--6
SELECT * FROM cursos WHERE carga_horaria > 400;

--7
SELECT alunos.nome AS aluno, cursos.nome AS curso
FROM alunos
INNER JOIN cursos ON alunos.curso_id = cursos.id

--8
SELECT c.nome AS curso,
COUNT(a.id) AS quantidade_alunos
FROM cursos c
LEFT JOIN alunos a ON c.id = a.curso_id
GROUP BY c.id, c.nome

--9
SELECT alunos.nome, cursos.nome AS curso, cursos.carga_horaria
FROM alunos
INNER JOIN cursos ON alunos.curso_id = cursos.id
WHERE cursos.carga_horaria > 350;

--10
SELECT alunos.nome AS aluno, cursos.nome AS curso
FROM alunos
INNER JOIN cursos ON alunos.curso_id = cursos.id
WHERE cursos.nome = 'Informática' OR cursos.nome = 'Engenharia';

--11
SELECT cursos.nome, COUNT(alunos.id) AS quantidade_alunos
FROM cursos
LEFT JOIN alunos ON cursos.id = alunos.curso_id
GROUP BY cursos.id, cursos.nome;

--12
SELECT cursos.nome AS curso, AVG(alunos.idade) AS idade_media
FROM cursos
INNER JOIN alunos ON cursos.id = alunos.curso_id
GROUP BY cursos.id, cursos.nome;

--13
SELECT cursos.nome AS curso,
       SUM(alunos.salario) AS salario_total,
       AVG(alunos.salario) AS media_salarial
FROM cursos
INNER JOIN alunos ON cursos.id = alunos.curso_id
GROUP BY cursos.id, cursos.nome;

--14
SELECT departamento, COUNT(*) AS quantidade_funcionarios
FROM funcionarios
GROUP BY departamento;

--15
SELECT cursos.nome, COUNT(alunos.id) AS quantidade_alunos
FROM cursos
INNER JOIN alunos ON cursos.id = alunos.curso_id
GROUP BY cursos.id, cursos.nome
HAVING COUNT(alunos.id) > 2;

--16
SELECT departamento, AVG(salario) AS media_salarial
FROM funcionarios
GROUP BY departamento
HAVING AVG(salario) > 4000;

--17
SELECT alunos.nome, alunos.telefone
FROM alunos
INNER JOIN cursos ON alunos.curso_id = cursos.id
WHERE alunos.telefone IS NOT NULL
AND cursos.nome = 'Informática';

--18
SELECT alunos.nome, cursos.nome AS curso
FROM alunos
INNER JOIN cursos ON alunos.curso_id = cursos.id
WHERE cursos.nome = 'Matemática'
   OR cursos.nome = 'Física';
   
--19
SELECT alunos.nome, cursos.nome AS curso
FROM alunos
INNER JOIN cursos ON alunos.curso_id = cursos.id
WHERE cursos.nome <> 'Administração';

--20
SELECT nome FROM alunos

UNION

SELECT nome FROM professores;

--21
SELECT nome FROM alunos

INTERSECT

SELECT nome FROM professores;

--22
SELECT nome FROM alunos

EXCEPT

SELECT nome FROM professores;

























