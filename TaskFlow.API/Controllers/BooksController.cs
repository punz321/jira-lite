using Microsoft.AspNetCore.Mvc;
using TaskFlow.API.Models;
using System.Collections.Generic;
using System.Linq;

namespace TaskFlow.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BooksController : ControllerBase
    {
        // simple in-memory store for this warmup exercise
        private static readonly object _lock = new object();
        private static readonly List<Book> _books = new List<Book>
        {
            new Book { Id = 1, Title = "Clean Code", Author = "Robert C. Martin" },
            new Book { Id = 2, Title = "The Pragmatic Programmer", Author = "Andrew Hunt & David Thomas" }
        };

        // GET: api/books
        [HttpGet]
        public ActionResult<IEnumerable<Book>> Get()
        {
            return Ok(_books);
        }

        // GET: api/books/{id}
        [HttpGet("{id}")]
        public ActionResult<Book> Get(int id)
        {
            var book = _books.FirstOrDefault(b => b.Id == id);
            if (book == null) return NotFound();
            return Ok(book);
        }

        // POST: api/books
        [HttpPost]
        public ActionResult<Book> Post([FromBody] Book newBook)
        {
            if (newBook == null) return BadRequest();

            lock (_lock)
            {
                var nextId = _books.Any() ? _books.Max(b => b.Id) + 1 : 1;
                newBook.Id = nextId;
                _books.Add(newBook);
            }

            return CreatedAtAction(nameof(Get), new { id = newBook.Id }, newBook);
        }

        // PUT: api/books/{id}
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Book updated)
        {
            if (updated == null || id != updated.Id) return BadRequest();

            lock (_lock)
            {
                var idx = _books.FindIndex(b => b.Id == id);
                if (idx == -1) return NotFound();
                _books[idx].Title = updated.Title;
                _books[idx].Author = updated.Author;
            }

            return NoContent();
        }

        // DELETE: api/books/{id}
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            lock (_lock)
            {
                var book = _books.FirstOrDefault(b => b.Id == id);
                if (book == null) return NotFound();
                _books.Remove(book);
            }

            return NoContent();
        }
    }
}
