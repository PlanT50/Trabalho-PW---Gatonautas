package com.gatonautas.gatonautasapi.controller;

import com.gatonautas.gatonautasapi.model.Usuario;
import com.gatonautas.gatonautasapi.repository.UsuarioRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    private final UsuarioRepository repository;
    private final BCryptPasswordEncoder encoder;

    public UsuarioController(UsuarioRepository repository, BCryptPasswordEncoder encoder) {
        this.repository = repository;
        this.encoder = encoder;
    }

    @PostMapping("/cadastro")
    public ResponseEntity<?> cadastrar(@RequestBody Map<String, String> body) {
        String nome = body.get("nome");
        String email = body.get("email");
        String senha = body.get("senha");
        String endereco = body.get("endereco");

        if (nome == null || email == null || senha == null || endereco == null) {
            return ResponseEntity.badRequest().body(Map.of("erro", "Todos os campos são obrigatórios"));
        }

        if (repository.existsByEmail(email)) {
            return ResponseEntity.badRequest().body(Map.of("erro", "Email já cadastrado"));
        }

        String senhaHash = encoder.encode(senha);
        Usuario usuario = new Usuario(nome, email, senhaHash, endereco);
        repository.save(usuario);

        return ResponseEntity.ok(Map.of(
            "mensagem", "Cadastro realizado com sucesso",
            "id", usuario.getId(),
            "nome", usuario.getNome(),
            "email", usuario.getEmail()
        ));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> body) {
        String email = body.get("email");
        String senha = body.get("senha");

        if (email == null || senha == null) {
            return ResponseEntity.badRequest().body(Map.of("erro", "Email e senha são obrigatórios"));
        }

        Optional<Usuario> usuarioOpt = repository.findByEmail(email);

        if (usuarioOpt.isEmpty() || !encoder.matches(senha, usuarioOpt.get().getSenha())) {
            return ResponseEntity.status(401).body(Map.of("erro", "Email ou senha inválidos"));
        }

        Usuario usuario = usuarioOpt.get();
        return ResponseEntity.ok(Map.of(
            "mensagem", "Login realizado com sucesso",
            "id", usuario.getId(),
            "nome", usuario.getNome(),
            "email", usuario.getEmail(),
            "endereco", usuario.getEndereco()
        ));
    }
}
