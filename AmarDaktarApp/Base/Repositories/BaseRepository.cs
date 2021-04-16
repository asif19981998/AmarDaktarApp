using Base.Contracts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Base.Repositories
{
    public class BaseRepository<T> : IMainRepository<T> where T : class
    {
        private DbContext _db;
        public BaseRepository(DbContext db)
        {
            _db = db;
        }
        DbSet<T> Table => _db.Set<T>();

        bool IMainRepository<T>.Add(T entity)
        {
            Table.Add(entity);
            return SaveChanges();
        }

        Task<bool> IMainRepository<T>.AddAsync(T entity)
        {
            Table.AddAsync(entity);
            return SaveChangesAsync();
        }

        bool IMainRepository<T>.AddOrUpdate(Expression<Func<T, object>> identifier, ICollection<T> entityCollections)
        {
            throw new NotImplementedException();
        }

        bool IMainRepository<T>.AddRange(ICollection<T> entities)
        {
            Table.AddRange(entities);
            return SaveChanges();
        }

        Task<bool> IMainRepository<T>.AddRangeAsync(ICollection<T> entities)
        {
            Table.AddRangeAsync(entities);
            return SaveChangesAsync();
        }

        ICollection<T> IMainRepository<T>.GetAll()
        {
            throw new NotImplementedException();
        }

        Task<ICollection<T>> IMainRepository<T>.GetAllAsync()
        {
            throw new NotImplementedException();
        }

        T IMainRepository<T>.GetById(long id)
        {
            throw new NotImplementedException();
        }

        Task<T> IMainRepository<T>.GetByIdAsync(long id)
        {
            throw new NotImplementedException();
        }

        bool IMainRepository<T>.Remove(T entity, bool isSoftDeleted)
        {
            throw new NotImplementedException();
        }

        bool IMainRepository<T>.RemoveRange(ICollection<T> entities, bool isSoftDelted)
        {
            throw new NotImplementedException();
        }

        bool IMainRepository<T>.Update(T entity)
        {
            throw new NotImplementedException();
        }

        Task<bool> IMainRepository<T>.UpdateAsync(T entity)
        {
            throw new NotImplementedException();
        }

        bool IMainRepository<T>.UpdateRange(ICollection<T> entities)
        {
            throw new NotImplementedException();
        }

        Task<bool> IMainRepository<T>.UpdateRangeAsync(ICollection<T> entities)
        {
            throw new NotImplementedException();
        }

        private bool SaveChanges()
        {
           
            return _db.SaveChanges() > 0;
        }

        private async Task<bool> SaveChangesAsync()
        {
            
            return await _db.SaveChangesAsync() > 0;
        }
    }
}
