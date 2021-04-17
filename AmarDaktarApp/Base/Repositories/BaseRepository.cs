using AmarDaktar.Model.Contracts.EntityContracts;
using Base.Contracts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;


namespace Base.Repositories
{
    public abstract class BaseRepository<T> : IMainRepository<T> where T : class,IEntity
    {
        private DbContext _db;
        public BaseRepository(DbContext db)
        {
            _db = db;
        }
        DbSet<T> Table => _db.Set<T>();

        public virtual bool Add(T entity)
        {
            Table.Add(entity);
            return SaveChanges();
        }

        public virtual async Task<bool> AddAsync(T entity)
        {
             Table.AddAsync(entity);
            return await SaveChangesAsync();
        }

        public virtual bool AddOrUpdate(Expression<Func<T, object>> identifier, ICollection<T> entityCollections)
        {
            throw new NotImplementedException();
        }

        public virtual bool AddRange(ICollection<T> entities)
        {
            Table.AddRange(entities);
            return SaveChanges();
        }

        public virtual async Task<bool> AddRangeAsync(ICollection<T> entities)
        {
            Table.AddRangeAsync(entities);
            return await SaveChangesAsync();
        }

        public virtual ICollection<T> GetAll()
        {
           return Table.ToList();
        }

        public virtual async Task<ICollection<T>> GetAllAsync()
        {
            return await Table.ToListAsync();
        }

        public virtual T GetById(long id)
        {
            return Table.FirstOrDefault(c => c.Id == id);
        }

        public virtual Task<T> GetByIdAsync(long id)
        {
            throw new NotImplementedException();
        }

        public virtual bool Remove(T entity, bool isSoftDeleted)
        {
            throw new NotImplementedException();
        }

        public virtual bool RemoveRange(ICollection<T> entities, bool isSoftDelted)
        {
            throw new NotImplementedException();
        }

        public virtual bool Update(T entity)
        {
            throw new NotImplementedException();
        }

        public virtual Task<bool> UpdateAsync(T entity)
        {
            throw new NotImplementedException();
        }

        public virtual bool UpdateRange(ICollection<T> entities)
        {
            throw new NotImplementedException();
        }

        public virtual Task<bool> UpdateRangeAsync(ICollection<T> entities)
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
